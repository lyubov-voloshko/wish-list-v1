import React, { Component } from 'react';

import Button from '../components/ui-components/button';
import { Redirect } from 'react-router-dom';
import TextBox from './ui-components/text-box';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/auth';

const mapStateToProps = (state) => {
    return {
        isAuth: !state.firebase.auth.isEmpty
    }
}

const mapDispatchToProps = {
    signIn
}

class LoginPage extends Component {
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
        const { isAuth } = this.props;

        if (isAuth) return <Redirect to="/" />
        
        return (
            <form className="loginFrom" onSubmit={(e) => this.handleSubmit(e)}>
                <TextBox type="email" label="Email" id="email" value={this.state.email} onChange={this.getValue}/>
                <TextBox type="password" label="Password" id="password" value={this.state.password} onChange={this.getValue}/>
                <Button appearance="primary" caption="log in"/>                
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);