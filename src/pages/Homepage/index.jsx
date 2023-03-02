/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Events, Filter, Footer, Header } from '../../components';
import './Homepage.css';

export const Homepage = () => {
  const [filterValue, setFilterValue] = useState('ALL');
  const [searchValue, setSearchValue] = useState('');
  return (
    <div>
      <Header />
      <Filter setFilterValue={setFilterValue} setSearchValue={setSearchValue} />
      <Events
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        searchValue={searchValue}
      />
      {/* <Footer /> */}
    </div>
  );
};
