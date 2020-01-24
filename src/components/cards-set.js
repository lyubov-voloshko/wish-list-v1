import '../styles/cards-set.css';

import React, { Component } from 'react';

import DeleteWishConfirmation from './dialog-deleteWish';
import EditWish from './dialog-editWish';
import GrantWish from './dialog-grantWish';
import WishCard from './wish-card';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const mapStateToProps = (state) => {
    return {
        wishes: state.firestore.data.wishes,
        isAuth: !state.firebase.auth.isEmpty,
        wishToGrantId: state.wishList.wishToGrantId,
        wishToEditId: state.wishList.wishToEditId,
        wishToDeleteId: state.wishList.wishToDeleteId,
    }
}


class CardsSet extends Component {
    render() {
        const  { isAuth, wishes, wishToEditId, wishToGrantId, wishToDeleteId } = this.props;
        
        return (
            <React.Fragment>
                <ul className="wishList">
                    { wishes && Object.entries(wishes).map( ([key, wish]) => {
                        if (wish) return <li className="wishList__item" key={key}>
                            <WishCard id={key} wish={wish} isAuth={isAuth} />

                        </li>
                    })}
                </ul>

                {wishToGrantId ? <GrantWish /> : null}
                {wishToEditId ? <EditWish /> : null}
                {wishToDeleteId ? <DeleteWishConfirmation /> : null}
            </React.Fragment>

        )
    }
}

export default compose(
    firestoreConnect(() => ['wishes']),
    connect(mapStateToProps)
)(CardsSet)