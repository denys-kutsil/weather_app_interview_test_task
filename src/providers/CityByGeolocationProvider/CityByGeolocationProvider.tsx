import React from 'react';

import { CityByGeolocationContext } from '@/context';

import { useCityByGeolocationProvider } from './useCityByGeolocationProvider';

interface ICityByGeolocationProviderProps {
  children: React.ReactNode;
}

export const CityByGeolocationProvider: React.FC<ICityByGeolocationProviderProps> = ({
  children,
}) => {
  const value = useCityByGeolocationProvider();
  return (
    <CityByGeolocationContext.Provider value={value}>{children}</CityByGeolocationContext.Provider>
  );
};

export default CityByGeolocationProvider;
