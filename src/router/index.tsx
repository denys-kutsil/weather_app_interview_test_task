import type { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import routes from './routes';

const AppRouter: FC = () => (
  <Routes>
    {routes.map(({ path, component: Component, layout: Layout }) => (
      <Route
        element={
          <Layout>
            <Component />
          </Layout>
        }
        path={path}
        key={path}
      />
    ))}
  </Routes>
);

export default AppRouter;
