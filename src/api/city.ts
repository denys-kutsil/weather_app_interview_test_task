import axios from 'axios';

import { wrapErrorHandling } from '@/helpers';
import { envUtil } from '@/utils';

const { geolocationApiUrl } = envUtil.getEnv();

export const fetchCityByUserGeoLocation = wrapErrorHandling<
  { city: string },
  GeolocationCoordinates
>(async ({ latitude, longitude }: GeolocationCoordinates) => {
  const response = await axios.get<{ city: string }>(`${geolocationApiUrl}`, {
    params: {
      latitude,
      longitude,
      localityLanguage: 'en',
    },
  });
  return response.data;
});
