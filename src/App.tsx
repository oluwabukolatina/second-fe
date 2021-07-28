import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Shows from './components/shows/Shows';
import Header from './layout/Header';
import AppProvider from './provider/AppProvider';
import Show from './components/shows/Show';
import styled from 'styled-components';
import Watchlist from './components/watchlist/Watchlist';

const AppStyle = styled.div`
  color: black;
  font-family: 'Raleway', sans-serif;
`;
const App = () => {
  return (
    <Switch>
      <AppProvider>
        <AppStyle>
          <Header />
          <Route exact path="/" component={Shows} />
          <Route exact path="/show/:name" component={Show} />
          <Route exact path="/watchlist" component={Watchlist} />
        </AppStyle>
      </AppProvider>
    </Switch>
  );
};
export default App;
