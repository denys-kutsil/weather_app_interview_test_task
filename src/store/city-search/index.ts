import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import type { ICitySearchStore } from './type';

export const useCitySearch = create<ICitySearchStore>()(
  immer((set) => ({
    searchText: '',
    setSearchText: (searchText: string) =>
      set((state) => {
        state.searchText = searchText;
      }),
  })),
);
