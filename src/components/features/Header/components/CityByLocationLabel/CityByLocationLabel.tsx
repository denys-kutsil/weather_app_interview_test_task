import React from 'react';

import PlaceIcon from '@mui/icons-material/Place';
import { Box, Typography } from '@mui/material';

import { useCityByGeolocation } from '@/context';

import { styles } from './styles';

const CityByLocationLabel = () => {
  const { cityByGeoLocation } = useCityByGeolocation();
  if (!cityByGeoLocation) return null;
  return (
    <Box sx={styles.container}>
      <PlaceIcon sx={styles.icon} />
      <Typography variant="h5">{cityByGeoLocation}</Typography>
    </Box>
  );
};

export default CityByLocationLabel;
