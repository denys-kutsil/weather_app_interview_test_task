import { useEffect, useState } from 'react';

import { darkTheme, lightTheme, LocalStorageKeys, ThemeMode } from '@/constants';
import { getLocalStorageItemByKey, setLocalStorageItemByKey } from '@/helpers';

export const useAppThemeProvider = () => {
  const [themeMode, setThemeMode] = useState(ThemeMode.Dark);

  const isDarkMode = themeMode === ThemeMode.Dark;
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const themeFromLocalStorage = getLocalStorageItemByKey<ThemeMode>(LocalStorageKeys.Theme, true);
    if (themeFromLocalStorage) setThemeMode(themeFromLocalStorage);
  }, []);

  const onThemeModeChange = () => {
    const newMode = isDarkMode ? ThemeMode.Light : ThemeMode.Dark;
    setLocalStorageItemByKey(LocalStorageKeys.Theme, newMode);
    setThemeMode(newMode);
  };

  return { theme, isDarkMode, onThemeModeChange };
};
