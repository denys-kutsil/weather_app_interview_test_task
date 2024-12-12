import { createContext, useContext } from 'react';

interface CityByGeolocationContextType {
  cityByGeoLocation: null | string;
  isLoading: boolean;
}

export const CityByGeolocationContext = createContext<CityByGeolocationContextType>({
  cityByGeoLocation: null,
  isLoading: false,
});

export const useCityByGeolocation = () => {
  return useContext(CityByGeolocationContext);
};
