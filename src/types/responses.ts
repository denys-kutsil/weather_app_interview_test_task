import type { WeatherState } from '@/constants';

interface IWeather {
  id: number;
  main: WeatherState;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface IForecastItemResponse {
  dt: number;
  main: IMain;
  weather: IWeather[];
  clouds: {
    all: number;
  };
  wind: IWind;
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface IForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: IForecastItemResponse[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface IWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
