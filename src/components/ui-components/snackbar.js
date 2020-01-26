import '../../styles/ui-components/snackbar.css';

import React, { Component } from 'react';

import { closeErrorSnackbar } from '../../store/actions/wish-list'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        error: state.general.errorMessage,
        success: state.general.successMessage
    }
}

const mapDispatchToProps = {
    closeErrorSnackbar
}

class Snackbar extends Component {
    render() {
        const  { error, success, closeErrorSnackbar } = this.props;
        const message = error || success;
        if (message) return (
            <div className={`snackbar snackbar_${error ? 'error' : 'success'}`}>
                <span className="snackbar__message">{ message }</span>
                { error ? <button className="snackbar__action" onClick={() => closeErrorSnackbar()}>&#xd7;</button> : null} 
            </div>
        );
        return null;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);