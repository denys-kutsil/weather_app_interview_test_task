import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { useFetchCityByGeoLocation } from '@/hooks';

export const useCityByGeolocationProvider = () => {
  const [isCurrentPositionLoading, setIsCurrentPositionLoading] = useState(true);
  const [coords, setCoords] = useState<null | GeolocationCoordinates>(null);

  const { data, isLoading: isCityLoading } = useFetchCityByGeoLocation(coords);

  const cityByGeoLocation = data?.city ?? null;

  const isLoading = isCityLoading || isCurrentPositionLoading;

  useEffect(() => {
    if (!navigator.geolocation) {
      setIsCurrentPositionLoading(false);
      toast.error('Geolocation is not supported by your browser');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setIsCurrentPositionLoading(false);
        setCoords(position.coords);
      },
      () => {
        setIsCurrentPositionLoading(false);
        toast.error("You don't have a permission for receive your city by geolocation");
      },
    );
  }, []);

  return { isLoading, cityByGeoLocation };
};
