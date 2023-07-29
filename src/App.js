import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigutator } from './helpers/snackbar-manager';
import { BrowserRouter, Route } from 'react-router-dom';
import { PublicRoutes } from './models/routes';
import { RoutesWithNotFound } from './components/NotFound/RoutesWithNotFound';
import Home from './pages/Home/Home';
import { Detail } from './pages/Detail/components/Detail';

function App() {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigutator />
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path={PublicRoutes.HOME} element={<Home />} />
          <Route path={PublicRoutes.DETAIL} element={<Detail />} />
        </RoutesWithNotFound>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
