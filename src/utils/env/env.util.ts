import type { IEnv } from './env.type';

export const mapEnv = () => {
  const parsed: IEnv = {
    weatherApiToken: import.meta.env.VITE_WEATHER_API_TOKEN ?? null,
    weatherApiUrl: import.meta.env.VITE_WEATHER_API_URL ?? null,
    geolocationApiUrl: import.meta.env.VITE_GEOLOCATION_API_URL ?? null,
  };

  return Object.freeze(parsed);
};

let env: IEnv;
export const getEnv = (): Readonly<IEnv> => {
  if (!env) {
    env = mapEnv();
  }
  return env;
};
