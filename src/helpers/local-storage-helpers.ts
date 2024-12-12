import type { LocalStorageKeys } from '@/constants';

export const getLocalStorageItemByKey = <T>(name: LocalStorageKeys, isString = false): T | null => {
  const item = localStorage.getItem(name);
  if (!item) return null;
  if (isString) return item as T;
  return JSON.parse(item);
};

export const setLocalStorageItemByKey = (name: LocalStorageKeys, value: string | object): void => {
  const item = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(name, item);
};
