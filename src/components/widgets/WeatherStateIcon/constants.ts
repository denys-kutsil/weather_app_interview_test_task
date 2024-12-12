import { WeatherState } from '@/constants';

export const skyStatePath = '/weather-state-icons/';

export const skyImagesByState = {
  [WeatherState.Clear]: 'clear.png',
  [WeatherState.Clouds]: 'clouds.png',
  [WeatherState.Snow]: 'snow.png',
  [WeatherState.Rain]: 'rain.png',
  [WeatherState.Drizzle]: 'drizzle.png',
  [WeatherState.Thunderstorm]: 'thunderstorm.png',
  [WeatherState.Atmosphere]: 'atmosphere.png',
};
