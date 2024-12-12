import React from 'react';

import type { SxProps } from '@mui/material';
import { CircularProgress, LinearProgress, Typography } from '@mui/material';

interface ILoadingStateWrapperProps {
  isLoading: boolean;
  children: React.ReactNode;
  isDataEnable: boolean;
  isLinear?: boolean;
  sxProps?: SxProps;
}

const LoadingStateWrapper: React.FC<ILoadingStateWrapperProps> = ({
  sxProps,
  isLoading,
  children,
  isDataEnable,
  isLinear = false,
}) => (
  <>
    {isLoading && (isLinear ? <LinearProgress sx={sxProps} /> : <CircularProgress sx={sxProps} />)}
    {!isDataEnable && !isLoading && (
      <Typography variant="h5" sx={sxProps}>
        Not found data
      </Typography>
    )}
    {isDataEnable && <>{children}</>}
  </>
);

export default LoadingStateWrapper;
