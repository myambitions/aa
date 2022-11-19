export interface ForecastProps {
  dt: number;
  dt_txt: string;
  main: { temp: number };
  weather: WeatherProps[];
}

export interface WeatherProps {
  icon: string;
  main: string;
  description: string;
}

export interface CityProps {
  id: string;
  name: string;
}
