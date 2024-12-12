import React from 'react';

import { AppBar, Box } from '@mui/material';

import { CityByLocationLabel, SearchWeatherInputByCity, ToggleThemeModeSwitch } from './components';
import { styles } from './styles';

const Header = () => (
  <AppBar position="fixed" sx={styles.header}>
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.left}>
        <CityByLocationLabel />
        <SearchWeatherInputByCity />
      </Box>
      <ToggleThemeModeSwitch />
    </Box>
  </AppBar>
);

export default Header;
