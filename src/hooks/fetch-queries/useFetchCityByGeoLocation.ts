import { useQuery } from '@tanstack/react-query';

import { fetchCityByUserGeoLocation } from '@/api';

const useFetchCityByGeoLocation = (coords: GeolocationCoordinates | null) =>
  useQuery({
    queryKey: ['city_by_geo_location', coords],
    queryFn: () => coords && fetchCityByUserGeoLocation(coords),
    enabled: !!coords,
  });

export default useFetchCityByGeoLocation;
