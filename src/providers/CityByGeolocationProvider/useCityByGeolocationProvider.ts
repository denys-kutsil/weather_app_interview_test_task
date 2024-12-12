import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { fetchCityByUserGeoLocation } from '@/api';

export const useCityByGeolocationProvider = () => {
  const [isCurrentPositionLoading, setIsCurrentPositionLoading] = useState(true);
  const [coords, setCoords] = useState<null | GeolocationCoordinates>(null);

  const { data, isLoading: isCityLoading } = useQuery({
    queryKey: ['city_by_geo_location', coords],
    queryFn: () => coords && fetchCityByUserGeoLocation(coords),
    enabled: !!coords,
  });

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
