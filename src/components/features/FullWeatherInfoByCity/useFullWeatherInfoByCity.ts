import { useEffect } from 'react';

import { useCityByGeolocation } from '@/context';
import { useFetchWeatherForThisDayQuery } from '@/hooks';
import { useCitySearch, useHistoryOfCitiesSearchingStore } from '@/store';

export const useFullWeatherInfoByCity = () => {
  const { searchText } = useCitySearch();
  const { addHistoryOfCitySearching } = useHistoryOfCitiesSearchingStore();

  const { isLoading: isCityByLocationLoading, cityByGeoLocation } = useCityByGeolocation();

  const city = searchText?.length ? searchText : (cityByGeoLocation ?? '');

  const { data: weatherForCurrentDay, isLoading: isCityLoading } =
    useFetchWeatherForThisDayQuery(city);

  const isLoading =
    (isCityLoading && !weatherForCurrentDay) || (isCityByLocationLoading && !weatherForCurrentDay);

  const currentWeather = weatherForCurrentDay?.weather?.[0];

  useEffect(() => {
    if (weatherForCurrentDay && searchText) addHistoryOfCitySearching(weatherForCurrentDay.name);
  }, [weatherForCurrentDay, searchText, addHistoryOfCitySearching]);

  return {
    city,
    currentWeather,
    weatherForCurrentDay,
    isLoading,
  };
};
