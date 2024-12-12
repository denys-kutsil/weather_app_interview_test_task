import { WeatherState } from '@/constants';

export const backgroundByCloudPath = '/weather-card-background/';

export const cardBackgroundByCloudStatus = {
  [WeatherState.Clouds]: 'clouds.png',
  [WeatherState.Snow]: 'snow.gif',
  [WeatherState.Clear]: 'shine.jpg',
  [WeatherState.Rain]: 'rain.gif',
  [WeatherState.Drizzle]: 'drizzle.gif',
  [WeatherState.Thunderstorm]: 'thunderstorm.gif',
  [WeatherState.Atmosphere]: 'atmosphere.webp',
};
