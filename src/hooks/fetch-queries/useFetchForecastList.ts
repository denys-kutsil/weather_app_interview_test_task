import { useQuery } from '@tanstack/react-query';

import { fetchForecast } from '@/api';

const useFetchForecastList = (city: string) =>
  useQuery({
    queryKey: ['forecast_for_next_five_days', city],
    queryFn: () => fetchForecast(city),
  });

export default useFetchForecastList;
