import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Shows from './components/shows/Shows';
import Header from './layout/Header';
import AppProvider from './provider/AppProvider';

const App = () => {
  return (
    <Switch>
      <AppProvider>
        <div className="app">
          <Header />
          <Route exact path="/" component={Shows} />
        </div>
      </AppProvider>
    </Switch>
  );
};
export default App;
