import React, { useState } from 'react';
import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faFilter,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

export const Filter = () => {
  const [filter, setFilter] = useState(false);

  const handleFilterClick = () => {
    setFilter(!filter);
  };
  return (
    <div className="filter-parent">
      <div className="filter-main">
        <div className="filter-logo">
          <FontAwesomeIcon icon={faFilter} />
          <a>FILTER</a>
          <button id="filter-btn" onClick={handleFilterClick}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
        </div>
        <div className="search-bar">
          <input className="bar" type="text" />
          <button id="search-btn">
            <FontAwesomeIcon id="mag-icon" icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      {filter && (
        <div className="filter-options">
          <div className="filter-container">
            <div className="options">
              <div className="single-option">
                <input type="radio" name="fav_language" />
                <label>ALL</label>
              </div>
              <div className="single-option">
                <input type="radio" name="fav_language" />
                <label>REGISTERED</label>
              </div>
            </div>
            <div className="options">
              <div className="single-option">
                <input type="radio" name="fav_language" />
                <label>BOOKMARKED</label>
              </div>
              <div className="single-option">
                <input type="radio" name="fav_language" />
                <label>SEATS AVAILABLE</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
