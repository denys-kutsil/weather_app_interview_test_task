import { createContext, useContext } from 'react';

interface AppThemeContextType {
  isDarkMode: boolean;
  onThemeModeChange: () => void;
}

export const AppThemeContext = createContext<AppThemeContextType>({
  isDarkMode: true,
  onThemeModeChange: () => {},
});

export const useMuiThemeContext = () => {
  return useContext(AppThemeContext);
};
