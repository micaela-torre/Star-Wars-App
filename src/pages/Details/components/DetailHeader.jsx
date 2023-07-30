import React from 'react';
import WithHeader from '../../../hocs/WithHeader';
import { Link, useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../models/routes';

const DetailHeader = () => {
  const navigate = useNavigate();

  return (
    <nav>
      {window.history.state && window.history.state.idx > 0 && <span onClick={() => navigate(-1)}>Volver</span>}
      <Link to={PublicRoutes.HOME}>Home</Link>
    </nav>
  );
};

export const CustomDetailHeader = WithHeader(DetailHeader);
