import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import AboutMe from './components/about-me';
import Button from './components/ui-components/button';
import CardsSet from './components/cards-set';
import LoginPage from './components/login-page';
import MainPage from './components/main-page';
import React from 'react';
import Snackbar from './components/ui-components/snackbar';
import Tabs from './components/tabs';
import { isLoaded } from 'react-redux-firebase'
import logo from './logo.svg';
import { openCreateDialog } from './store/actions/wish-list';
import { signOut } from './store/actions/auth';

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

const mapStateToProps = (state) => {
  return {
    isAuth: !state.firebase.auth.isEmpty
  }
}

const mapDispatchToProps = {
  openCreateDialog,
  signOut
}

function App(props) {
  const { isAuth, openCreateDialog, signOut } = props;
  
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <Snackbar />
        <div className="App">
          {isAuth ? 
            <React.Fragment>
              <header class="header">
                <Button appearance="primary" caption="add wish" onClick={() => openCreateDialog()}/>
                <h1 className="header__projectName">Wish List</h1>          
                <Button type="button" appearance="secondary" caption="logout" onClick={() => signOut()}/>
              </header>
            </React.Fragment> :
            <header className="header">
              <h1 className="header__projectName">Wish List</h1>          
            </header>
          }
          <Switch>
            <Route path="/login" component={ LoginPage } />
            <Route path="/" component={ MainPage } />
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
