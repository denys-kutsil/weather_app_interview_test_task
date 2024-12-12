import axios from 'axios';

import { wrapErrorHandling } from '@/helpers';
import type { IWeatherResponse } from '@/types';
import { envUtil } from '@/utils';

const { weatherApiUrl, weatherApiToken } = envUtil.getEnv();

export const fetchWeatherDataForThisDay = wrapErrorHandling<IWeatherResponse, string>(
  async (city: string) => {
    const response = await axios.get<IWeatherResponse>(`${weatherApiUrl}/weather`, {
      params: {
        q: city,
        appid: weatherApiToken,
        units: 'metric',
      },
    });
    return response.data;
  },
);
