import type { ICityType } from '@/types';

export interface IHistoryOfSearchingStoreType {
  historyOfCitiesSearching: ICityType[];
  addHistoryOfCitySearching: (city: string) => void;
}
