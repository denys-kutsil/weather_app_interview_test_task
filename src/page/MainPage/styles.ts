export const styles = {
  container: {
    display: 'flex',
    flexDirection: {
      sm: 'row',
      xs: 'column',
    },
    justifyContent: 'space-between',
    gap: 2,
    width: '100%',
    mt: 2,
    px: {
      sm: 0,
      xs: 2,
    },
    boxSizing: 'border-box',
  },
  rightSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
} as const;
