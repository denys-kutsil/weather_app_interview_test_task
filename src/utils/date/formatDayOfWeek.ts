export const formatDayOfWeek = (date: Date): string =>
  date.toLocaleString('en-GB', { weekday: 'short' });
