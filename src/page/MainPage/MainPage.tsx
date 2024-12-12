import { Box } from '@mui/material';

import {
  FullWeatherInfoByCity,
  WeatherListByFavouriteCities,
  WeatherListBySearchHistory,
} from '@/components';

import { styles } from './styles';

const MainPage = () => (
  <Box sx={styles.container}>
    <FullWeatherInfoByCity />
    <Box sx={styles.rightSection}>
      <WeatherListByFavouriteCities />
      <Box mt={2}>
        <WeatherListBySearchHistory />
      </Box>
    </Box>
  </Box>
);

export default MainPage;
