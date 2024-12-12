import React from 'react';

import { Box, Typography } from '@mui/material';

import { WeatherStateIcon } from '@/components';
import type { IForecastItemResponse } from '@/types';
import { parseDateToDayAndTime } from '@/utils';

import { styles } from './styles';

const ForecastItem: React.FC<IForecastItemResponse> = ({ weather, main, dt_txt }) => {
  const { temp } = main;
  const currentWeather = weather[0];

  const parsedData = parseDateToDayAndTime(dt_txt);

  const time = parsedData?.time;
  const dayOfWeek = parsedData?.dayOfWeek;
  const formattedDate = parsedData?.formattedDate;

  return (
    <Box sx={styles.container}>
      <Typography variant="h3">{dayOfWeek}</Typography>
      <Typography variant="h5" mt={1}>
        {time}
      </Typography>
      <Typography variant="h6" my={1}>
        {formattedDate}
      </Typography>
      <WeatherStateIcon state={currentWeather.main} sxProps={styles.image} />
      <Typography variant="h5" mt={1}>
        {Math.floor(temp)} °C
      </Typography>
    </Box>
  );
};

export default ForecastItem;
