import '../styles/add-wish.css';

import React, { Component } from 'react';

import Button from './ui-components/button';
import TextBox from './ui-components/text-box';
import { connect } from 'react-redux';
import { createWish } from '../store/actions/wish-list';

const mapDispatchToProps = {
    createWish
}

class AddWish extends Component {
    state = {
        title: '',
        category: '',
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
        return (
            <form className="addWishFrom" onSubmit={this.handleSubmit}>
                <TextBox label="Title" id="add-title" name="title" value={this.state.title} onChange={this.getValue}/>
                <select id="add-category" name="category" value={this.state.category} onChange={this.getValue}>
                    <option value="book">book</option>
                    <option value="clothes">clothes</option>
                    <option value="food">food</option>
                    <option value="item">item</option>
                    <option value="job">job</option>
                    <option value="travelling">travelling</option>
                </select>
                <TextBox label="Put some description" id="add-description" name="description" value={this.state.description} onChange={this.getValue}/>
                <TextBox label="Add image URL" id="add-imageURL" name="imageURL" value={this.state.imageURL} onChange={this.getValue}/>
                <Button type="submit" appearance="primary" caption="make a wish"/>                
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(AddWish);