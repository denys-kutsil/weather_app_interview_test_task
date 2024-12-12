import React, { memo } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchWeatherDataForThisDay } from '@/api';
import { LoadingStateWrapper } from '@/components';
import type { IWeatherResponse } from '@/types';

interface IWeatherCardByCityProps {
  city: string;
  Component: React.FC<IWeatherResponse>;
}

const FetchWeatherByCityWrapper: React.FC<IWeatherCardByCityProps> = memo(({ city, Component }) => {
  const { data: weatherForThisDay, isLoading } = useQuery({
    queryKey: ['weather_for_this_day', city],
    queryFn: () => fetchWeatherDataForThisDay(city),
    // TODO:  Missed staleTime: 12000,
  });

  return (
    <LoadingStateWrapper isLinear isDataEnable={!!weatherForThisDay} isLoading={isLoading}>
      <>{weatherForThisDay && <Component {...weatherForThisDay} />}</>
    </LoadingStateWrapper>
  );
});

export default FetchWeatherByCityWrapper;
