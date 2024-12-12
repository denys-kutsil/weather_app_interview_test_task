import { MainLayout } from 'src/components/shared/layouts';
import { MainPage } from 'src/page';

import { ClientRoutes } from '@/constants';

import type { IRouterParams } from './types';

const routes: IRouterParams[] = [
  {
    path: ClientRoutes.Main,
    component: MainPage,
    layout: MainLayout,
  },
];

export default routes;
