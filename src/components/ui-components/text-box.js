import '../../styles/ui-components/text-box.css';

import React, { Component } from 'react';

class TextBox extends Component {
    render() {
        return (
            <div className="textBox">
                <input type={this.props.type} id={this.props.id} className="textField" placeholder="Enter" value={this.props.value} onChange={this.props.onChange}/>
                <label htmlFor={this.props.id} className="textFieldLabel">{this.props.label}</label>
            </div>
        )
    }
}

export default TextBox;