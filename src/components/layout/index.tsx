import { useCallback, useEffect, useState } from "react";
import api from "api";
import { citiesList, CityProps, ForecastProps } from "utils";
import { Card } from "components/card";
import { AppStyled, Container } from "./styled";
import Menu from "components/menu";
import { Loader, Overlay } from "components/card/styled";

function App() {
  const [weatherInfo, setWeatherInfo] = useState<ForecastProps[]>([]);
  const [currentCity, setCurrentCity] = useState<CityProps>(citiesList[0]);
  const [loading, setLoading] = useState(true);

  const handleCityChange = useCallback(async (city: string) => {
    setLoading(true);
    const data = await api.get(city);

    // we took 12:00 timestamp as average temp of the day as on free version we can get 3h-5days forecast data
    const next = data.list.filter((_: any, idx: number) => idx % 8 === 0);

    setWeatherInfo(next);
    setLoading(false);
  }, []);

  const handleClick = useCallback((city: CityProps) => {
    handleCityChange(city.name);
    setCurrentCity(city);
  }, []);

  useEffect(() => {
    if (!weatherInfo.length) {
      handleCityChange(currentCity.name);
    }
  }, []);

  if (!weatherInfo.length) {
    return (
      <Overlay>
        <Loader />
      </Overlay>
    );
  }

  return (
    <AppStyled>
      <Menu selected={currentCity.name} onClick={handleClick} />
      <Container>
        {weatherInfo.map(({ dt, dt_txt, main, weather }) => (
          <Card
            key={dt}
            date={dt_txt}
            temperature={main.temp}
            weather={weather[0]}
            loading={loading}
          />
        ))}
      </Container>
    </AppStyled>
  );
}

export default App;
