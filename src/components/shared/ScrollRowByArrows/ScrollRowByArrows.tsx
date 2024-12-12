import React from 'react';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

import { styles } from './styles';
import { useScrollRowByArrows } from './useScrollRowByArrows';

interface IScrollRowByArrowsProps {
  children: React.ReactNode;
}

const ScrollRowByArrows: React.FC<IScrollRowByArrowsProps> = ({ children }) => {
  const { scrollContainerRef, scrollToStart, scrollToEnd } = useScrollRowByArrows();

  return (
    <Box sx={styles.container}>
      <IconButton onClick={scrollToStart} sx={styles.icon}>
        <KeyboardArrowLeft fontSize="small" />
      </IconButton>
      <Box sx={styles.card} ref={scrollContainerRef}>
        {children}
      </Box>
      <IconButton onClick={scrollToEnd} sx={styles.icon}>
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};

export default ScrollRowByArrows;
