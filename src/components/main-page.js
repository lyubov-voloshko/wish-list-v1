import '../styles/cards-set.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import AboutMe from './about-me';
import CardsSet from './cards-set';
import CreateWish from './dialog-createWish'
import DeleteWishConfirmation from './dialog-deleteWish';
import EditWish from './dialog-editWish';
import GrantWish from './dialog-grantWish';
import Tabs from './tabs';
import WishCard from './wish-card';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class MainPage extends Component {
    render() {
        const  { isAuth, wishes, wishCreateShown, wishToEditId, wishToGrantId, wishToDeleteId } = this.props;
        
        return (
            <React.Fragment>
                <Tabs />          
                <Switch>
                    <Route exact path="/" component={ CardsSet } />
                    <Route exact path="/current"><CardsSet isGranted={false} /></Route>
                    <Route exact path="/granted"><CardsSet isGranted={true} /></Route>
                    <Route path="/about" component={ AboutMe } />
                </Switch>
            </React.Fragment>

        )
    }
}

export default (MainPage)