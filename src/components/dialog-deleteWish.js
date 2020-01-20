import {
    DialogActions,
    DialogContent,
    DialogHeader,
    DialogScreen,
} from './ui-components/dialog';
import React, { Component } from 'react';
import { closeDeleteConfirmation, deleteWish } from '../store/actions/wish-list';

import Button from './ui-components/button';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        wishToDeleteId: state.wishList.wishToDeleteId,
        wishToDelete: state.firestore.data.wishes ? state.firestore.data.wishes[state.wishList.wishToDeleteId] : null
    }
}

const mapDispatchToProps = {
    closeDeleteConfirmation,
    deleteWish
}

class DeleteWishConfirmation extends Component {
    render() {
        const  { wishToDeleteId, wishToDelete, closeDeleteConfirmation, deleteWish } = this.props;
        return (
            <DialogScreen onClose={() => closeDeleteConfirmation()}>
                <DialogHeader>Please confirm</DialogHeader>
                <DialogContent>You are going to delete "{wishToDelete && wishToDelete.title}" wish.</DialogContent>
                <DialogActions>
                    <Button type="button" appearance="primary" outlined caption="cancel" 
                        onClick={() => closeDeleteConfirmation()}/>
                    <Button type="button" appearance="primary" caption="delete" 
                        onClick={() => deleteWish(wishToDeleteId)}/>
                </DialogActions>
            </DialogScreen>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteWishConfirmation);