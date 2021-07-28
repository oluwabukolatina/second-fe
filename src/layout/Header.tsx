import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderStyle } from '../AppStyle';

const AppName = styled.div`
  width: 67%;
  margin-top: auto;
  margin-bottom: auto;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <AppName>
        <Link className="app-link" to="/">
          Second NL
        </Link>
      </AppName>
      <Link className="app-link" to="/watchlist">
        Watchlist
      </Link>
    </HeaderStyle>
  );
};

export default Header;
