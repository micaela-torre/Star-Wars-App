import React from 'react';
import WithHeader from '../../../hocs/WithHeader';

const HomeHeader = () => {
  return (
    <nav>
      <a href="#Characters">characters</a>
      <a href="#Planets">planets</a>
      <a href="#Vehicles">vehicles</a>
    </nav>
  );
};

export const CustomHomeHeader = WithHeader(HomeHeader);
