import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import AboutMe from './components/about-me';
import AddWish from './components/add-wish';
import Button from './components/ui-components/button';
import CardsSet from './components/cards-set';
import LoginPage from './components/login-page';
import React from 'react';
import Tabs from './components/tabs';
import { isLoaded } from 'react-redux-firebase'
import logo from './logo.svg';
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())        
  }
}

function App(props) {
  const { isAuth } = props;
  
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <div className="App">
          <header className="header">
            <h1 className="header__projectName">Wish List</h1>          
          </header>
          <Route path="/login" component={ LoginPage } />
          { isAuth ? 
            <React.Fragment>
              <Button type="button" appearance="secondary" caption="logout" onClick={props.signOut}/>                
              <AddWish />
            </React.Fragment> : null
          }
          <Tabs />          
          <Switch>
            <Route exact path="/" component={ CardsSet } />
            <Route path="/about" component={ AboutMe } />
          </Switch>
        </div>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
