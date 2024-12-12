export const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    alignItems: 'center',
  },
  icon: {
    height: 36,
    width: 36,
    justifySelf: 'center',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  right: {
    textAlign: 'right',
  },
  name: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '150px',
  },
} as const;
