export const styles = {
  container: {
    position: 'relative',
    height: 'min-content',
  },
  card: {
    width: { sm: 480, xs: '100%' },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  emptyPlaceholder: {
    p: 2,
  },
} as const;
