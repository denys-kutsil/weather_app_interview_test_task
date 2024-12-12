import React from 'react';

import { Box, Typography } from '@mui/material';

import { FavouriteCityIcon, WeatherStateIcon } from '@/components';
import type { IWeatherResponse } from '@/types';
import { truncateString } from '@/utils';

import { styles } from './styles';

const PreviewWeatherInfo: React.FC<IWeatherResponse> = ({ name, main, weather, wind }) => {
  const currentWeather = weather?.[0];
  const { humidity, temp } = main;
  const { deg } = wind;

  return (
    <Box sx={styles.container}>
      <Box px={2}>
        <Box sx={styles.titleContainer}>
          <Typography variant="h2" mr={1}>
            {truncateString(name, 15)}
          </Typography>
          <FavouriteCityIcon city={name} />
        </Box>
        <Typography variant="h1">{Math.floor(temp)} °C</Typography>
        <Box sx={styles.section}>
          <Typography variant="h5">{humidity}%</Typography>
          <Typography variant="h5" ml={2}>
            {deg} mph
          </Typography>
        </Box>
      </Box>
      <WeatherStateIcon state={currentWeather.main} sxProps={styles.skyImage} />
    </Box>
  );
};

export default PreviewWeatherInfo;
