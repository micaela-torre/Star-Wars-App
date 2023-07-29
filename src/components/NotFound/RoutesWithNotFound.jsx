import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound';

export const RoutesWithNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
