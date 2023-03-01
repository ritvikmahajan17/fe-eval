import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();
  const handleHeaderClick = () => {
    navigate('/');
  };

  return (
    <div className="header-main">
      <a onClick={handleHeaderClick} id="header-text">
        EVENTIFY
      </a>
    </div>
  );
};
