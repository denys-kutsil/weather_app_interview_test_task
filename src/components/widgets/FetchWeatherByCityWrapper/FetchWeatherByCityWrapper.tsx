import React, { memo } from 'react';

import { LoadingStateWrapper } from '@/components';
import { useFetchWeatherForThisDayQuery } from '@/hooks';
import type { IWeatherResponse } from '@/types';

interface IWeatherCardByCityProps {
  city: string;
  Component: React.FC<IWeatherResponse>;
}

const FetchWeatherByCityWrapper: React.FC<IWeatherCardByCityProps> = memo(({ city, Component }) => {
  const { data: weatherForThisDay, isLoading } = useFetchWeatherForThisDayQuery(city);

  return (
    <LoadingStateWrapper isLinear isDataEnable={!!weatherForThisDay} isLoading={isLoading}>
      <>{weatherForThisDay && <Component {...weatherForThisDay} />}</>
    </LoadingStateWrapper>
  );
});

export default FetchWeatherByCityWrapper;
