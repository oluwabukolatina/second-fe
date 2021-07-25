import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Shows from './components/shows/Shows';
import Header from './layout/Header';
import AppProvider from './provider/AppProvider';
import Show from './components/shows/Show';

const App = () => {
  return (
    <Switch>
      <AppProvider>
        <div className="app">
          <Header />
          <Route exact path="/show/:name" component={Show} />
          <Route exact path="/" component={Shows} />
        </div>
      </AppProvider>
    </Switch>
  );
};
export default App;
