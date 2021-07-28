import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const HeaderStyle = styled.div`
  background: #0e65c9;
  padding: 0.2% 4rem;
  display: grid;
  grid-template-columns: 70% 15% auto;
`;
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
      <p>TV API</p>
    </HeaderStyle>
  );
};

export default Header;
