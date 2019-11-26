import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AboutMe from './components/about-me';
import AddWish from './components/add-wish';
import CardsSet from './components/cards-set';
import Login from './components/login-page';
import React from 'react';
import Tabs from './components/tabs';
import logo from './logo.svg';

const isAuth = true;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <h1 className="header__projectName">Wish List</h1>          
        </header>
        { !isAuth ? 
          <Route path="/login" component={ Login } /> : 
          <React.Fragment>
            <AddWish />
            <Tabs />
            <Switch>
              <Route exact path="/" component={ CardsSet } />
              <Route path="/about" component={ AboutMe } />
            </Switch>
          </React.Fragment>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
