import React, { lazy, Suspense } from 'react';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigutator } from './helpers/snackbar-manager';
import { BrowserRouter, Route } from 'react-router-dom';
import { PublicRoutes } from './models/routes';
import { RoutesWithNotFound } from './components/NotFound/RoutesWithNotFound';
import Spinner from './components/Spinner/Spinner';
import Container from './components/Container/Container';

const Home = lazy(() => import('./pages/Home/Home'));
const Details = lazy(() => import('./pages/Details/Details'));

function App() {
  return (
    <Suspense
      fallback={
        <Container>
          <Spinner />
        </Container>
      }
    >
      <SnackbarProvider>
        <SnackbarUtilitiesConfigutator />
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route exact path={PublicRoutes.HOME} element={<Home />} />
            <Route path={`${PublicRoutes.DETAILS}:section/:id/`} element={<Details />}>
              <Route path={PublicRoutes.DETAILS_WITH_NAME} element={<Details />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </SnackbarProvider>
    </Suspense>
  );
}

export default App;
