import React from 'react';
import WithHeader from '../../../hocs/WithHeader';

const HomeHeader = () => {
  return (
    <nav>
      <a href="#Characters">characters</a>
      <a href="#Planets">planets</a>
      <a href="#Starships">starships</a>
    </nav>
  );
};

export const CustomHomeHeader = WithHeader(HomeHeader);
