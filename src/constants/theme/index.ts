import { createTheme } from '@mui/material/styles';

import { ThemeMode } from '@/constants';

import { getThemComponents } from './components';
import { darkPalette, lightPalette } from './palette';
import typography from './typography';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export const baseTheme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 699,
      md: 1000,
      lg: 1439,
      xl: 1900,
    },
  },
});

export const darkTheme = createTheme(baseTheme, {
  palette: darkPalette,
  components: getThemComponents(ThemeMode.Dark),
  typography,
});

export const lightTheme = createTheme(baseTheme, {
  palette: lightPalette,
  components: getThemComponents(ThemeMode.Light),
  typography,
});
