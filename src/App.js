import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigutator } from './helpers/snackbar-manager';
import { BrowserRouter, Route } from 'react-router-dom';
import { PublicRoutes } from './models/routes';
import { RoutesWithNotFound } from './components/NotFound/RoutesWithNotFound';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

function App() {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigutator />
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route exact path={PublicRoutes.HOME} element={<Home />} />
          <Route path={`${PublicRoutes.DETAILS}:section/:id/`} element={<Details />} >
          <Route path={`${PublicRoutes.DETAILS}:section/:id/:name`} element={<Details />} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
