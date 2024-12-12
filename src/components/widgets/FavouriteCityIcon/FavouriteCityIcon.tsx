import React, { useMemo } from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';

import { useFavouriteCityStore } from '@/store';

import { styles } from './styles';

interface IMakeCityFavouriteButtonProps {
  city: string;
}

const FavouriteCityIcon: React.FC<IMakeCityFavouriteButtonProps> = ({ city }) => {
  const { favouritesCities, toggleFavouriteCityState } = useFavouriteCityStore();

  const isCityFavourite = useMemo(
    () => favouritesCities.find(({ title }) => title === city),
    [city, favouritesCities],
  );

  const onFavouriteToggle = () => {
    toggleFavouriteCityState(city);
  };

  return (
    <IconButton onClick={onFavouriteToggle}>
      {isCityFavourite ? <StarIcon sx={styles.icon} /> : <StarBorderIcon sx={styles.icon} />}
    </IconButton>
  );
};

export default FavouriteCityIcon;
