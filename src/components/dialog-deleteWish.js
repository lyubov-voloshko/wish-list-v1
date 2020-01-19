import {
    DialogActions,
    DialogContent,
    DialogHeader,
    DialogScreen,
} from './ui-components/dialog';
import React, { Component } from 'react';
import { closeDeleteConfirmation, deleteWish } from '../store/actions/wish-list';

import Button from './ui-components/button';
import { Redirect } from 'react-router-dom';
import TextBox from './ui-components/text-box';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/auth';

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
    state = {
        email: '',
        password: ''
    }
    getValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.signIn(this.state);
    }
    render() {
        const  { wishToDeleteId, wishToDelete, closeDeleteConfirmation, deleteWish } = this.props;
        if (wishToDelete) return (
            <DialogScreen onClose={() => closeDeleteConfirmation()}>
                <DialogHeader>Please confirm</DialogHeader>
                <DialogContent>You are going to delete "{wishToDelete.title}" wish.</DialogContent>
                <DialogActions>
                    <Button type="button" appearance="primary" outlined caption="cancel" 
                        onClick={() => closeDeleteConfirmation()}/>
                    <Button type="button" appearance="primary" caption="delete" 
                        onClick={() => deleteWish(wishToDeleteId)}/>
                </DialogActions>
            </DialogScreen>
        );
        return null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteWishConfirmation);