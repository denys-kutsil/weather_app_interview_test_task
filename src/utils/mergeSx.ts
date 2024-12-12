import type { SxProps } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

type MergeSxResponse<Theme extends {}> =  Array<boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)>

export const mergeSx = <Theme extends object = object>(
  ...args: (SxProps<Theme> | undefined)[]
): MergeSxResponse<Theme> => {
  return args.reduce<
  MergeSxResponse<Theme>
  >((acc, param) => {
    if (typeof param === 'undefined') {
      return acc;
    }
    return Array.isArray(param) ? [...acc, ...param] : [...acc, param];
  }, []);
};
