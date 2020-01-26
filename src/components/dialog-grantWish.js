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
import headerImage from '../assets/images/85fc650f04.jpg';
import '../styles/dialog-grantWish.css';
import '../styles/ui-components/select.css';

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
        grantHelper: 'me',
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
                <DialogHeader type="Grant">
                    <div class="illustration">
                        <img src={headerImage} />
                        <div class="illustration__frame"></div>        
                    </div>
                    <h1 class="headerCaption">
                        <span class="headerCaption__highlighted">Congrats!</span>
                        Your wish came true!
                    </h1>
                </DialogHeader>
                <form onSubmit={this.handleSubmit}>
                    <DialogContent extraСlass="grantForm">
                        <p className="dialogContent__message">Your wish "{wishToGrant && wishToGrant.title}" was granted</p>
                        <div>
                            <select id="grantHelper" name="grantHelper" className="select grantForm__select" value={this.state.grantHelper} onChange={this.getValue}>
                                <option value="me" className="selectOption">by me</option>
                                <option value="by" className="selectOption">by</option>
                                <option value="helper" className="selectOption">thanks to</option>
                            </select>
                            {this.state.grantHelper !== 'me' ? 
                                <TextBox label="Name" id="grant-person" name="grantPerson" extraСlass="grantForm__textBox"
                                    value={this.state.grantPerson} onChange={this.getValue}/> : null}
                        </div>
                        <div>on the occasion of <TextBox type="text" label="occasion" id="grant-occasion" name="grantOccasion" extraСlass="grantForm__textBox"
                            value={this.state.grantOccasion} onChange={this.getValue}/>
                        on 
                        <TextBox type="date" label="date" id="grant-date" name="grantDate" extraСlass="grantForm__textBox"
                            value={this.state.grantDate} onChange={this.getValue}/>
                        </div>
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