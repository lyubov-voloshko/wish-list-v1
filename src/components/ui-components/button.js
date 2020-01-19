import '../../styles/ui-components/button.css';

import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Button extends Component {
    render() {
        return (
            <button type={this.props.type} 
                className={`button button_${this.props.appearance} ${this.props.outlined ? 'button_outlined' : null}`} 
                onClick={this.props.onClick}>
                {this.props.caption}
            </button>
        )
    }
}

export default Button;