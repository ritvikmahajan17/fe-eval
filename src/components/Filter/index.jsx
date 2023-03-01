import React, { useState } from 'react';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faFilter,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export const Filter = ({ setFilterValue, setSearchValue }) => {
  const [filter, setFilter] = useState(false);
  const [input, setInput] = useState('');

  //   const [filterValue, setFilterValue] = useState('ALL');

  const handleFilterClick = () => {
    setFilter(!filter);
  };

  const handleRadioClick = (e) => {
    setFilterValue(e.target.value);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setSearchValue(input);
  };
  return (
    <div className="filter-parent">
      <div className="filter-main">
        <div className="filter-logo">
          <FontAwesomeIcon icon={faFilter} />
          <a>FILTER</a>
          <button id="filter-btn" onClick={handleFilterClick}>
            {filter ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </button>
        </div>
        <div className="search-bar">
          <input onChange={handleChange} className="bar" type="text" />
          <button onClick={handleSearch} id="search-btn">
            <FontAwesomeIcon id="mag-icon" icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      {filter && (
        <div className="filter-options">
          <div className="filter-container">
            <div className="options">
              <div className="single-option">
                <input
                  type="radio"
                  name="fav_language"
                  value="ALL"
                  onClick={handleRadioClick}
                  defaultChecked
                />
                <label>ALL</label>
              </div>
              <div className="single-option">
                <input
                  type="radio"
                  name="fav_language"
                  value="REGISTERED"
                  onClick={handleRadioClick}
                />
                <label>REGISTERED</label>
              </div>
            </div>
            <div className="options">
              <div className="single-option">
                <input
                  type="radio"
                  name="fav_language"
                  value="BOOKMARKED"
                  onClick={handleRadioClick}
                />
                <label>BOOKMARKED</label>
              </div>
              <div className="single-option">
                <input
                  type="radio"
                  name="fav_language"
                  value="SEATS-AVAILABLE"
                  onClick={handleRadioClick}
                />
                <label>SEATS AVAILABLE</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Filter.propTypes = {
  setFilterValue: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
