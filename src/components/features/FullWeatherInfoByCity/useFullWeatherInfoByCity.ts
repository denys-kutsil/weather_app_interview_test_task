import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { fetchWeatherDataForThisDay } from '@/api';
import { useCityByGeolocation } from '@/context';
import { useCitySearch, useHistoryOfCitiesSearchingStore } from '@/store';

export const useFullWeatherInfoByCity = () => {
  const { searchText } = useCitySearch();
  const { addHistoryOfCitySearching } = useHistoryOfCitiesSearchingStore();

  const { isLoading: isCityByLocationLoading, cityByGeoLocation } = useCityByGeolocation();

  const currentCity = searchText?.length ? searchText : (cityByGeoLocation ?? '');

  //TODO: move to queries folders
  const { data: weatherForCurrentDay, isLoading: isCityLoading } = useQuery({
    queryKey: ['weather_for_this_day', currentCity],
    queryFn: () => fetchWeatherDataForThisDay(currentCity),
    enabled: !!currentCity?.length,
    // TODO:  Missed staleTime: 12000,
  });

  const isLoading =
    (isCityLoading && !weatherForCurrentDay) || (isCityByLocationLoading && !weatherForCurrentDay);

  const currentWeather = weatherForCurrentDay?.weather?.[0];

  useEffect(() => {
    if (weatherForCurrentDay && searchText) addHistoryOfCitySearching(weatherForCurrentDay.name);
  }, [weatherForCurrentDay, searchText, addHistoryOfCitySearching]);

  return {
    currentWeather,
    weatherForCurrentDay,
    isLoading,
    currentCity,
  };
};
