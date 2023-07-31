import React, { lazy, Suspense } from 'react';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigutator } from './helpers/snackbar-manager';
import { BrowserRouter, Route } from 'react-router-dom';
import { PublicRoutes } from './models/routes';
import { RoutesWithNotFound } from './components/NotFound/RoutesWithNotFound';
import Home from './pages/Home/Home';

const Details = lazy(() => import('./pages/Details/Details'));

function App() {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigutator />
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route exact path={PublicRoutes.HOME} element={<Home />} />
          <Route
            path={`${PublicRoutes.DETAILS}:section/:id/`}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Details />
              </Suspense>
            }
          />
          <Route
            path={`${PublicRoutes.DETAILS}:section/:id/:name`}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Details />
              </Suspense>
            }
          />
        </RoutesWithNotFound>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
