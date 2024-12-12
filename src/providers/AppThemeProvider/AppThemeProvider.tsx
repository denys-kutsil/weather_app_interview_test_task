import React from 'react';

import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import { toastConfig } from '@/constants/config/toast-config';
import { AppThemeContext } from '@/context';

import { useAppThemeProvider } from './useAppThemeProvider';

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const { theme, ...value } = useAppThemeProvider();
  const { isDarkMode } = value;
  return (
    <AppThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <ToastContainer theme={isDarkMode ? 'dark' : 'light'} {...toastConfig} />
    </AppThemeContext.Provider>
  );
};

export default AppThemeProvider;
