import React, { memo } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchForecast } from '@/api';
import { LoadingStateWrapper, ScrollRowByArrows } from '@/components';

import { ForecastItem } from './components';
import { styles } from './styles';

interface IForecastListProps {
  city: string;
}

const ForecastList: React.FC<IForecastListProps> = memo(({ city }) => {
  const { data: forecastForNextFiveDays, isFetched } = useQuery({
    queryKey: ['forecast_for_next_five_days', city],
    queryFn: () => fetchForecast(city),
  });

  const isLoading = !isFetched && !forecastForNextFiveDays;

  return (
    <LoadingStateWrapper
      sxProps={styles.emptyPlaceholder}
      isLoading={isLoading}
      isDataEnable={!!forecastForNextFiveDays}
    >
      <ScrollRowByArrows>
        {forecastForNextFiveDays?.list?.map((forecast) => (
          <ForecastItem key={forecast.dt} {...forecast} />
        ))}
      </ScrollRowByArrows>
    </LoadingStateWrapper>
  );
});

export default ForecastList;
