export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '100%',
    pb: 2,
  },
  card: {
    display: 'flex',
    gap: 3,
    py: 4,
    boxSizing: 'border-box',
    overflowX: 'auto',
    zIndex: 100,
    '&::-webkit-scrollbar': {
      height: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: '10px',
      border: '1px solid transparent',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'primary.main',
    },
  },
  icon: {
    mx: 1,
  },
} as const;
