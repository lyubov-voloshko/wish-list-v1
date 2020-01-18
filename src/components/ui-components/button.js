import '../../styles/ui-components/button.css';

import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Button extends Component {
    render() {
        return (
            <button type={this.props.type} className={`button button_${this.props.appearance}`} onClick={this.props.onClick}>
                {this.props.caption}
            </button>
        )
    }
}

export default Button;