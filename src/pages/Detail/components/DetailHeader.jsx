import React from 'react';
import WithHeader from '../../../hocs/WithHeader';
import { Link } from 'react-router-dom';
import { PublicRoutes } from '../../../models/routes';

const DetailHeader = () => {
  return (
    <nav>
      <Link to={PublicRoutes.HOME}>Home</Link>
    </nav>
  );
};

export const CustomDetailHeader = WithHeader(DetailHeader);
