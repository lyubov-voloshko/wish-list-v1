import '../styles/cards-set.css';

import React, { Component } from 'react';

import WishCard from './wish-card';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'

const mapStateToProps = (state) => {
    return {
        wishes: state.firestore.data.wishes
    }
}

class CardsSet extends Component {
    render() {
        const  { wishes } = this.props;
        return (
            <ul className="wishList">
                { wishes && Object.values(wishes).map( wish => {
                    return <li className="wishList__item">
                        <WishCard wish={wish} />
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