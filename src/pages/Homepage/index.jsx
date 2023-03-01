import React, { useState } from 'react';
import { Events, Filter, Header } from '../../components';
import './Homepage.css';

export const Homepage = () => {
  const [filterValue, setFilterValue] = useState('ALL');
  return (
    <div>
      <Header />
      <Filter setFilterValue={setFilterValue} />
      <Events filterValue={filterValue} />
    </div>
  );
};
