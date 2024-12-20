import React from 'react';

import { Box, Card } from '@mui/material';

import { ForecastList, LoadingStateWrapper } from '@/components';

import { BackgroundImageByWeather, PreviewWeatherInfo } from './componennts';
import { styles } from './styles';
import { useFullWeatherInfoByCity } from './useFullWeatherInfoByCity';

const FullWeatherInfoByCity = () => {
  const { city, currentWeather, weatherForCurrentDay, isLoading } = useFullWeatherInfoByCity();

  return (
    <Box style={styles.container}>
      {currentWeather?.main && <BackgroundImageByWeather state={currentWeather.main} />}
      <Card sx={styles.card}>
        <LoadingStateWrapper
          sxProps={styles.emptyPlaceholder}
          isLoading={isLoading}
          isDataEnable={!!weatherForCurrentDay}
        >
          {!!weatherForCurrentDay && (
            <>
              <PreviewWeatherInfo {...weatherForCurrentDay} />
              <ForecastList city={city} />
            </>
          )}
        </LoadingStateWrapper>
      </Card>
    </Box>
  );
};

export default FullWeatherInfoByCity;
