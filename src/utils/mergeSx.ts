import type { SxProps } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

type MergeSxResponse<Theme extends object> = Array<
  boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)
>;

export const mergeSx = <Theme extends object = object>(
  ...args: (SxProps<Theme> | undefined)[]
): MergeSxResponse<Theme> =>
  args.reduce<MergeSxResponse<Theme>>(
    (acc, param) => (param ? (Array.isArray(param) ? [...acc, ...param] : [...acc, param]) : acc),
    [],
  );
