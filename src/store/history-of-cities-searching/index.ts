import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { LocalStorageKeys } from '@/constants';
import { getLocalStorageItemByKey, setLocalStorageItemByKey } from '@/helpers';
import type { ICityType } from '@/types';

import type { IHistoryOfSearchingStoreType } from './type';

export const useHistoryOfCitiesSearchingStore = create<IHistoryOfSearchingStoreType>()(
  immer((set) => ({
    historyOfCitiesSearching:
      getLocalStorageItemByKey<ICityType[]>(LocalStorageKeys.HistoryOfSearching) ?? [],
    addHistoryOfCitySearching: (city: string) =>
      set((state) => {
        state.historyOfCitiesSearching = state.historyOfCitiesSearching.filter(
          (existingCity: ICityType) => existingCity.title !== city,
        );
        state.historyOfCitiesSearching.unshift({ title: city, id: nanoid() });

        if (state.historyOfCitiesSearching.length > 5) {
          state.historyOfCitiesSearching.pop();
        }

        setLocalStorageItemByKey(
          LocalStorageKeys.HistoryOfSearching,
          state.historyOfCitiesSearching,
        );
      }),
  })),
);
