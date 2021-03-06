import "../../styles/ui-components/text-box.css";

import React, { Component } from "react";

class TextBox extends Component {
	render() {
		return (
			<div className={`textBox ${this.props.extraСlass || ""}`}>
				<input
					id={this.props.id}
					type={this.props.type}
					className="textField"
					placeholder="Enter"
					name={this.props.name}
					value={this.props.value}
					onChange={this.props.onChange}
				/>
				<label htmlFor={this.props.id} className="textFieldLabel">
					{this.props.label}
				</label>
			</div>
		);
	}
}

export default TextBox;
