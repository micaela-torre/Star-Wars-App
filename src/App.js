import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigutator } from './helpers/snackbar-manager';
import Home from './pages/Home/Home';

function App() {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfigutator />
      <Home />;
    </SnackbarProvider>
  );
}

export default App;
