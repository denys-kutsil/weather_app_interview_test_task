import { WeatherByCityVerticalList } from '@/components';
import { useHistoryOfCitiesSearchingStore } from '@/store';

const WeatherListBySearchHistory = () => {
  const { historyOfCitiesSearching } = useHistoryOfCitiesSearchingStore();

  return <WeatherByCityVerticalList title="Search History" cities={historyOfCitiesSearching} />;
};

export default WeatherListBySearchHistory;
