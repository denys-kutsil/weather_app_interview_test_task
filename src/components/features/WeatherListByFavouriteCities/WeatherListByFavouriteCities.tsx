import { WeatherByCityVerticalList } from '@/components';
import { useFavouriteCityStore } from '@/store';

const WeatherListByFavouriteCities = () => {
  const { favouritesCities } = useFavouriteCityStore();
  return <WeatherByCityVerticalList title="Favourites" cities={favouritesCities} />;
};

export default WeatherListByFavouriteCities;
