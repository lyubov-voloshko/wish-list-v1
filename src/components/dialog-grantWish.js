import {
    DialogActions,
    DialogContent,
    DialogHeader,
    DialogScreen,
} from './ui-components/dialog';
import React, { Component } from 'react';
import { closeGrantDialog, grantWish } from '../store/actions/wish-list';

import Button from './ui-components/button';
import TextBox from './ui-components/text-box';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        wishToGrantId: state.wishList.wishToGrantId,
        wishToGrant: state.firestore.data.wishes ? state.firestore.data.wishes[state.wishList.wishToGrantId] : null
    }
}

const mapDispatchToProps = {
    closeGrantDialog,
    grantWish
}

class GrantWish extends Component {

    state = {
        grantHelper: '',
        grantPerson: '',
        grantDate: '',
        isGranted: false
    };
    
    getValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.grantWish(this.props.wishToGrantId, this.state);
    }
    render() {
        const  { wishToGrant, closeGrantDialog } = this.props;
        return (
            <DialogScreen onClose={() => closeGrantDialog()}>
                <DialogHeader>
                    <div class="illustration">
                        <img src="http://dl3.joxi.net/drive/2019/03/15/0007/0703/459455/55/85fc650f04.jpg" />
                        <div class="illustration__frame"></div>        
                    </div>
                    <h1>
                        <span class="highlighted">Congrats!</span>
                        Your wish came true!
                    </h1>
                </DialogHeader>
                <form onSubmit={this.handleSubmit}>
                    <DialogContent>
                        <p>Your wish "{wishToGrant.title}" was granted</p>
                        <select id="grantHelper">
                            <option value="me">by me</option>
                            <option value="by">by</option>
                            <option value="helper">with the help of</option>
                        </select>
                        <TextBox label="Name" id="grant-person" name="grantPerson" value={this.state.grantPerson} onChange={this.getValue}/>
                        <p>on</p>
                        <TextBox label="date" id="grant-date" name="grantDate" value={this.state.grantDate} onChange={this.getValue}/>
                    </DialogContent>
                    <DialogActions>
                        <Button type="button" appearance="primary" outlined caption="cancel" 
                            onClick={() => closeGrantDialog()}/>
                        <Button type="submit" appearance="primary" caption="grant" />
                    </DialogActions>
                </form>
            </DialogScreen>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GrantWish);