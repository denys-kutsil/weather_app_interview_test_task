import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { LocalStorageKeys } from '@/constants';
import { getLocalStorageItemByKey, setLocalStorageItemByKey } from '@/helpers';
import type { ICityType } from '@/types/city';

import type { IFavouriteCityStoreType } from './type';

export const useFavouriteCityStore = create<IFavouriteCityStoreType>()(
  immer((set) => ({
    favouritesCities:
      getLocalStorageItemByKey<ICityType[]>(LocalStorageKeys.FavouritesCities) ?? [],
    toggleFavouriteCityState: (newCity: string) =>
      set((state) => {
        const isCityFavourite = state.favouritesCities.find(({ title }) => title === newCity);

        if (isCityFavourite) {
          state.favouritesCities = state.favouritesCities.filter(({ title }) => title !== newCity);
        } else {
          state.favouritesCities.unshift({ title: newCity, id: nanoid() });
        }

        setLocalStorageItemByKey(LocalStorageKeys.FavouritesCities, state.favouritesCities);
      }),
  })),
);
