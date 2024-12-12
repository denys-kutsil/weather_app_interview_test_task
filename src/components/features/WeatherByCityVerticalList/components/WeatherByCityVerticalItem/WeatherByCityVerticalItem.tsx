import React from 'react';
import type { FC } from 'react';

import { Box, Typography } from '@mui/material';

import { FavouriteCityIcon, WeatherStateIcon } from '@/components';
import type { IWeatherResponse } from '@/types';
import { truncateString } from '@/utils';

import { styles } from './styles';

const WeatherByCityVerticalItem: FC<IWeatherResponse> = ({ weather, main, name }) => {
  const { temp } = main;
  const currentWeather = weather?.[0];

  return (
    <Box sx={styles.container}>
      <Box sx={styles.left}>
        <FavouriteCityIcon city={name} />
        <Typography sx={styles.name} ml={1}>
          {truncateString(name, 10)}
        </Typography>
      </Box>
      {currentWeather?.main && (
        <WeatherStateIcon state={currentWeather?.main} sxProps={styles.icon} />
      )}
      <Typography variant="h4" sx={styles.right}>
        {Math.floor(temp)} °C
      </Typography>
    </Box>
  );
};

export default WeatherByCityVerticalItem;
