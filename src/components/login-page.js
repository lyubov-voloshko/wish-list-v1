import React, { Component } from 'react';

import Button from '../components/ui-components/button';
import TextBox from './ui-components/text-box';

class Login extends Component {
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
    }
    render() {
        return (
            <form className="loginFrom" onSubmit={this.handleSubmit}>
                <TextBox label="Email" id="email" value={this.state.email} onChange={this.getValue}/>
                <TextBox label="Password" id="password" value={this.state.password} onChange={this.getValue}/>
                <Button appearance="primary" caption="log in"/>                
            </form>
        )
    }
}

export default Login;