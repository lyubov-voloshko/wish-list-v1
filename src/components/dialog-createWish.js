import {
    DialogActions,
    DialogContent,
    DialogHeader,
    DialogScreen,
} from './ui-components/dialog';
import React, { Component } from 'react';
import { closeCreateDialog, createWish } from '../store/actions/wish-list';

import Button from './ui-components/button';
import TextBox from './ui-components/text-box';
import { connect } from 'react-redux';
import headerImage from '../assets/images/add.jpg';
import '../styles/dialog-editWish.css';
import '../styles/ui-components/select.css';

const mapDispatchToProps = {
    closeCreateDialog,
    createWish
}

class CreateWish extends Component {

    state = {
        title: '',
        category: 'book',
        description: '',
        imageURL: ''
    }
    
    getValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createWish(this.state);
    }

    render() {
        const  { closeCreateDialog } = this.props;
        return (
            <DialogScreen onClose={() => closeCreateDialog()}>
                <DialogHeader type="Create">
                    <div class="illustration">
                        <img src={headerImage} />
                        <div class="illustration__frame"></div>        
                    </div>
                    <h1 class="headerCaption">
                        <span class="headerCaption__highlighted">Make a wish!</span>
                        &nbsp;carefully
                    </h1>
                </DialogHeader>
                <form onSubmit={this.handleSubmit}>
                    <DialogContent extraСlass="editForm">
                            <div className="editForm__topLine"> 
                                <TextBox label="Title" id="edit-title" name="title" extraСlass="editForm__textBox"
                                    value={this.state.title} onChange={this.getValue}/>
                                <select id="edit-category" name="category" className="select"
                                    value={this.state.category} onChange={this.getValue}>
                                    <option value="book">book</option>
                                    <option value="clothes">clothes</option>
                                    <option value="food">food</option>
                                    <option value="item">item</option>
                                    <option value="job">job</option>
                                    <option value="travelling">travelling</option>
                                </select>
                            </div>
                            <TextBox label="Put some description" id="edit-description" name="description" value={this.state.description} onChange={this.getValue}/>
                            <TextBox label="Add image URL" id="edit-imageURL" name="imageURL" value={this.state.imageURL} onChange={this.getValue}/>          
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" appearance="primary" outlined caption="cancel" 
                            onClick={() => closeCreateDialog()}/>
                        <Button type="submit" appearance="primary" caption="make a wish" />
                    </DialogActions>
                </form>
            </DialogScreen>
        );
    }
}

export default connect(null, mapDispatchToProps)(CreateWish);