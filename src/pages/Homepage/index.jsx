import React from 'react';
import { Events, Filter, Header } from '../../components';
import './Homepage.css';

export const Homepage = () => {
  return (
    <div>
      <Header />
      <Filter />
      <Events />
    </div>
  );
};
