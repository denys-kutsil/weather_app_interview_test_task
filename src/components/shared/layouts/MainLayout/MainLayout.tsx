import type { FC } from 'react';
import React from 'react';

import { Box } from '@mui/material';

import { Header } from '@/components';
import type { ILayoutProps } from '@/types';

import { styles } from './styles';

const MainLayout: FC<ILayoutProps> = ({ children }) => (
  <Box sx={styles.container}>
    <Header />
    <Box sx={styles.mainContent}>{children}</Box>
  </Box>
);

export default MainLayout;
