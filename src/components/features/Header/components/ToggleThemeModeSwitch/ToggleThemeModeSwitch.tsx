import React from 'react';

import { Switch } from '@mui/material';

import { useMuiThemeContext } from '@/context';

const ToggleThemeModeSwitch = () => {
  const { isDarkMode, onThemeModeChange } = useMuiThemeContext();

  return <Switch checked={isDarkMode} color="success" onClick={onThemeModeChange} />;
};

export default ToggleThemeModeSwitch;
