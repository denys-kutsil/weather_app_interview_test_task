import { ThemeMode } from '@/constants';
import { darkPalette, lightPalette } from '@/constants/theme/palette';

export const getThemComponents = (mode: ThemeMode) => {
  const palette = ThemeMode.Dark === mode ? darkPalette : lightPalette;
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: palette.circular,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: palette.text,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: palette.text,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: 12,
          paddingBottom: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backgroundColor: palette.primary.main,
          borderRadius: 16,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.text,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: 'white',
            '& + .MuiSwitch-track': {
              backgroundColor: 'white',
            },
          },
          '& .MuiSwitch-track': {
            backgroundColor: 'white',
          },
          '& .MuiSwitch-switchBase': {
            color: 'white',
          },
        },
      },
    },
  };
};
