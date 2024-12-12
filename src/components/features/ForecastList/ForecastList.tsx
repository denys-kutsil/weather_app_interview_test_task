import React, { memo } from 'react';

import { LoadingStateWrapper, ScrollRowByArrows } from '@/components';
import { useFetchForecastList } from '@/hooks';

import { ForecastItem } from './components';
import { styles } from './styles';

interface IForecastListProps {
  city: string;
}

const ForecastList: React.FC<IForecastListProps> = memo(({ city }) => {
  const { data: forecastForNextFiveDays, isFetched } = useFetchForecastList(city);

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
