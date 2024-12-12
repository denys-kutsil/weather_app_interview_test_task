export const truncateString = (input: string, maxLength = 20): string =>
  input.length > maxLength ? input.slice(0, maxLength) + '...' : input;
