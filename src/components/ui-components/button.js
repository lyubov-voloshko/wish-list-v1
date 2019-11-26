import '../../styles/ui-components/button.css';

import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class Button extends Component {
    render() {
        return (
            <button className={`button button_${this.props.appearance}`}>
                {this.props.caption}
            </button>
        )
    }
}

export default Button;