import { FC } from "react";
import dayjs from "dayjs";
import { WeatherProps } from "utils";
import Icon from "components/icon";
import { CardStyled, Info, Loader, Overlay, Temperature } from "./styled";

const Card: FC<Props> = ({ temperature, weather, date, loading }) => {
  const day = dayjs(date).format("ddd");
  const isToday = day === dayjs().format("ddd");

  return (
    <CardStyled>
      <p>{isToday ? "Today" : day}</p>
      <Info today={isToday}>
        <Icon
          name={weather.icon}
          description={weather.description}
          multiplier={isToday ? "4x" : "2x"}
        />
        <Temperature today={isToday}>
          <p>{Math.round(temperature)}&deg;</p>
          {isToday ? <p>{weather.main}</p> : null}
        </Temperature>
      </Info>
      {loading ? (
        <Overlay>
          <Loader />
        </Overlay>
      ) : null}
    </CardStyled>
  );
};

interface Props {
  temperature: number;
  weather: WeatherProps;
  date: string;
  loading: boolean;
}

export { Card };
