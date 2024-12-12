import type { ICityType } from '@/types';

export interface IFavouriteCityStoreType {
  favouritesCities: ICityType[];
  toggleFavouriteCityState: (city: string) => void;
}
