import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound';
import Container from '../Container/Container';

export const RoutesWithNotFound = ({ children }) => {
  return (
    <Container>
      <Routes>
        {children}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Container>
  );
};
