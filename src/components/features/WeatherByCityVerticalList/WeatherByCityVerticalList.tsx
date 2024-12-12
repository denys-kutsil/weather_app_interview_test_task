import type { FC } from 'react';

import { Card, Typography } from '@mui/material';

import { FetchWeatherByCityWrapper } from '@/components';
import type { ICityType } from '@/types';

import { WeatherByCityVerticalItem } from './components';
import { styles } from './styles';

interface IWeatherByCityVerticalListProps {
  cities: ICityType[];
  title: string;
}

const WeatherByCityVerticalList: FC<IWeatherByCityVerticalListProps> = ({ cities, title }) => (
  <Card sx={styles.card}>
    <Typography variant="h4">{title}</Typography>
    {cities.map(({ title, id }) => (
      <FetchWeatherByCityWrapper Component={WeatherByCityVerticalItem} city={title} key={id} />
    ))}
  </Card>
);

export default WeatherByCityVerticalList;
