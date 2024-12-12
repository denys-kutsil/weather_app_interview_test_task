import React from 'react';

import { Box } from '@mui/material';
import type { SxProps } from '@mui/material';

import { WeatherState } from '@/constants';
import { mergeSx } from '@/utils';

import { skyImagesByState, skyStatePath } from './constants';
import { styles } from './styles';

interface IWeatherStateIconProps {
  state: WeatherState;
  sxProps?: SxProps;
}

const WeatherStateIcon: React.FC<IWeatherStateIconProps> = ({ state, sxProps }) => {
  const url = skyStatePath + (skyImagesByState[state] ?? skyImagesByState[WeatherState.Atmosphere]);
  return (
    <Box sx={mergeSx(styles.container, sxProps)}>
      <img src={url} alt="Sky state" style={styles.image} />
    </Box>
  );
};

export default WeatherStateIcon;
