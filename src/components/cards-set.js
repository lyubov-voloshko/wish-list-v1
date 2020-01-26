import '../styles/cards-set.css';

import React, { Component } from 'react';

import CreateWish from './dialog-createWish'
import DeleteWishConfirmation from './dialog-deleteWish';
import EditWish from './dialog-editWish';
import GrantWish from './dialog-grantWish';
import Tabs from './tabs';
import WishCard from './wish-card';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const mapStateToProps = (state) => {
    return {
        wishes: state.firestore.data.wishes,
        isAuth: !state.firebase.auth.isEmpty,
        wishCreateShown: state.wishList.wishCreateShown,
        wishToGrantId: state.wishList.wishToGrantId,
        wishToEditId: state.wishList.wishToEditId,
        wishToDeleteId: state.wishList.wishToDeleteId,
    }
}


class CardsSet extends Component {
    render() {
        const  { isAuth, wishes, wishCreateShown, wishToEditId, wishToGrantId, wishToDeleteId } = this.props;
        
        return (
            <React.Fragment> 
                <ul className="wishList">
                    { wishes && Object.entries(wishes).map( ([key, wish]) => {
                        if (wish) return <li className="wishList__item" key={key}>
                            <WishCard id={key} wish={wish} isAuth={isAuth} />

                        </li>
                    })}
                </ul>

                {wishCreateShown ? <CreateWish /> : null}
                {wishToGrantId ? <GrantWish /> : null}
                {wishToEditId ? <EditWish /> : null}
                {wishToDeleteId ? <DeleteWishConfirmation /> : null}
            </React.Fragment>

        )
    }
}

export default compose(
    firestoreConnect((props) => {
        if (props.isGranted !== undefined) {
            return [
                {
                    collection: 'wishes',
                    where: [
                        ['isGranted', '==', props.isGranted]
                    ],
                }
            ]
        } else {
            return [
                {
                    collection: 'wishes',
                }
            ]
        }
        
    }),
    connect(mapStateToProps)
)(CardsSet)