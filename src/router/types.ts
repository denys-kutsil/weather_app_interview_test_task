import type { FC } from 'react';

import type { ClientRoutes } from '@/constants/enums';
import type { ILayoutProps } from '@/types';

export interface IRouterParams {
  component: FC;
  path: ClientRoutes;
  layout: FC<ILayoutProps>;
}
