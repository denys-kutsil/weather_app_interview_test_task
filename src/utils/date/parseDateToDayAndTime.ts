import { isValidDate, formatDayOfWeek, formatDate, formatTime } from '@/utils';

export const parseDateToDayAndTime = (
  dateStr: string,
): { dayOfWeek: string; time: string; formattedDate: string } | null => {
  const date = new Date(dateStr);
  if (!isValidDate(date)) return null;

  return {
    dayOfWeek: formatDayOfWeek(date),
    time: formatTime(date),
    formattedDate: formatDate(date),
  };
};
