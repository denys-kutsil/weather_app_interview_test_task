export const styles = {
  container: {
    pt: 8,
    minHeight: 'calc(100vh - 70px)',
    backgroundColor: 'background',
    pb: 2,
  },
  mainContent: {
    display: 'flex',
    width: { lg: '60%', md: '75%', sm: '90%', xs: '100%' },
    boxSizing: 'border-box',
    margin: 'auto',
  },
  children: {
    flexGrow: 1,
    px: 0,
    width: '100%',
  },
} as const;
