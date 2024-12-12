import { QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from '@/constants';
import { CityByGeolocationProvider } from '@/providers';
import { AppThemeProvider } from '@/providers';

import AppRouter from './router';

import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AppThemeProvider>
      <BrowserRouter>
        <CityByGeolocationProvider>
          <AppRouter />
        </CityByGeolocationProvider>
      </BrowserRouter>
    </AppThemeProvider>
  </QueryClientProvider>,
);
