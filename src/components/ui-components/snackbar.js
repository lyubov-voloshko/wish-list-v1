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
            <div class="snackbar snackbar_error">
                <span class="snackbar__message">{ message }</span>
                { !error ? <button class="snackbar__action" onClose={() => closeErrorSnackbar()}>&#xd7;</button> : null} 
            </div>
        );
        return null;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);