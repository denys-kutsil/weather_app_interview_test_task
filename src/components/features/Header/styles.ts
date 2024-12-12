export const styles = {
  header: {
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    boxShadow: 'none',
    zIndex: 1201,
    backgroundColor: 'primary.main',
  },
  contentWrapper: {
    width: { lg: '60%', md: '75%', sm: '90%', xs: '100%' },
    display: 'flex',
    justifyContent: 'space-between',
    px: {
      sm: 0,
      xs: 2,
    },
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
} as const;
