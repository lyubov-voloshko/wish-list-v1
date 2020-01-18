import React, { Component } from 'react';

import Button from './ui-components/button';
import TextBox from './ui-components/text-box';
import { connect } from 'react-redux';

//import { editWish } from '../store/actions/wish-list';

const mapDispatchToProps = (dispatch) => {
    return {
        createWish: (wish) => dispatch(createWish(wish))        
    }
}

class EditWish extends Component {
    state = {
        title: '',
        category: '',
        description: '',
        imageURL: ''
    }
    getValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.createWish(this.state);
    }
    render() {
        return (
            <form className="loginFrom" onSubmit={() => this.handleSubmit}>
                <TextBox label="Title" id="title" value={this.state.title} onChange={this.getValue}/>
                <select id="category" value={this.state.category} onChange={this.getValue}>
                    <option value="book">book</option>
                    <option value="clothes">clothes</option>
                    <option value="food">food</option>
                    <option value="item">item</option>
                    <option value="job">job</option>
                    <option value="travelling">travelling</option>
                </select>
                <TextBox label="Put some description" id="description" value={this.state.description} onChange={this.getValue}/>
                <TextBox label="Add image URL" id="imageURL" value={this.state.imageURL} onChange={this.getValue}/>
                <Button appearance="primary" caption="make a wish"/>                
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(EditWish);