import axios from 'axios';

import { wrapErrorHandling } from '@/helpers';
import type { IForecastResponse } from '@/types';
import { envUtil } from '@/utils';

const { weatherApiUrl, weatherApiToken } = envUtil.getEnv();

export const fetchForecast = wrapErrorHandling<IForecastResponse, string>(async (city: string) => {
  const response = await axios.get<IForecastResponse>(`${weatherApiUrl}/forecast`, {
    params: {
      q: city,
      appid: weatherApiToken,
      units: 'metric',
    },
  });
  return response.data;
});
