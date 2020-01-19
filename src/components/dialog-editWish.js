import {
    DialogActions,
    DialogContent,
    DialogHeader,
    DialogScreen,
} from './ui-components/dialog';
import React, { Component } from 'react';
import { closeEditDialog, editWish } from '../store/actions/wish-list';

import Button from './ui-components/button';
import TextBox from './ui-components/text-box';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        wishToEditId: state.wishList.wishToEditId,
        wishToEdit: state.firestore.data.wishes ? state.firestore.data.wishes[state.wishList.wishToEditId] : null
    }
}

const mapDispatchToProps = {
    closeEditDialog,
    editWish
}

class EditWish extends Component {

    state = {
        title: null,
        category: null,
        description: null,
        imageURL: null
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.wishToEdit) 
            this.setState({
                title: nextProps.wishToEdit.title,
                category: nextProps.wishToEdit.category,
                description: nextProps.wishToEdit.description,
                imageURL: nextProps.wishToEdit.imageURL
            })
    }
    
    getValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editWish(this.props.wishToEditId, this.state);
    }
    render() {
        const  { wishToEditId, wishToEdit, closeEditDialog } = this.props;
        if (wishToEdit) return (
            <DialogScreen onClose={() => closeEditDialog()}>
                <DialogHeader>Please edit</DialogHeader>
                <form onSubmit={this.handleSubmit}>
                    <DialogContent>
                            <TextBox label="Title" id="edit-title" name="title" value={this.state.title} onChange={this.getValue}/>
                            <select id="edit-category" name="category" value={this.state.category} onChange={this.getValue}>
                                <option value="book">book</option>
                                <option value="clothes">clothes</option>
                                <option value="food">food</option>
                                <option value="item">item</option>
                                <option value="job">job</option>
                                <option value="travelling">travelling</option>
                            </select>
                            <TextBox label="Put some description" id="edit-description" name="description" value={this.state.description} onChange={this.getValue}/>
                            <TextBox label="Add image URL" id="edit-imageURL" name="imageURL" value={this.state.imageURL} onChange={this.getValue}/>          
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" appearance="primary" outlined caption="cancel" 
                            onClick={() => closeEditDialog()}/>
                        <Button type="submit" appearance="primary" caption="edit" />
                    </DialogActions>
                </form>
            </DialogScreen>
        );
        return null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWish);