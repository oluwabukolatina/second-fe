import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="app-name">
        <Link className="app-link" to="/">
          Second NL
        </Link>
      </div>
      <p className="tv">TV API</p>
    </div>
  );
};

export default Header;
