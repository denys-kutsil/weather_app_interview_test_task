import { TextField } from '@mui/material';

import { useDebounceCallback } from '@/hooks';
import { useCitySearch } from '@/store';

const SearchWeatherInputByCity = () => {
  const { setSearchText } = useCitySearch();

  const onCityTextChange = useDebounceCallback((value: string) => {
    setSearchText(value);
  }, 1000);

  return (
    <TextField
      size="small"
      placeholder="Search by city name"
      variant="standard"
      slotProps={{
        input: {
          disableUnderline: true,
        },
      }}
      onChange={(e) => onCityTextChange(e.target.value)}
    />
  );
};

export default SearchWeatherInputByCity;
