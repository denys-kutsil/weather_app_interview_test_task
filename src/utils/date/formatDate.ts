export const formatDate = (date: Date): string =>
  date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
  });
