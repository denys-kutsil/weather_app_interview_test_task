import React from 'react';

import { WeatherState } from '@/constants';

import { backgroundByCloudPath, cardBackgroundByCloudStatus } from './constants';
import { styles } from './styles';

interface IBackgroundImageByWeatherProps {
  state: WeatherState;
}

const BackgroundImageByWeather: React.FC<IBackgroundImageByWeatherProps> = ({ state }) => {
  const backgroundImageUrl =
    backgroundByCloudPath +
    (cardBackgroundByCloudStatus[state] ?? cardBackgroundByCloudStatus[WeatherState.Atmosphere]);

  return <img src={backgroundImageUrl} style={styles.image} alt="Background" />;
};

export default BackgroundImageByWeather;
