import '../styles/cards-set.css';

import React, { Component } from 'react';

import WishCard from './wish-card';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'

const mapStateToProps = (state) => {
    return {
        wishes: state.firestore.data.wishes,
        isAuth: !state.firebase.auth.isEmpty
    }
}

class CardsSet extends Component {
    render() {
        const  { wishes, isAuth } = this.props;
        return (
            <ul className="wishList">
                { wishes && Object.values(wishes).map( wish => {
                    return <li className="wishList__item">
                        <WishCard wish={wish} isAuth={isAuth} />
                    </li>
                })}
                
            </ul>
        )
    }
}

export default compose(
    firestoreConnect(() => ['wishes']),
    connect(mapStateToProps)
)(CardsSet)