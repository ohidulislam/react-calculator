import React, { Component } from "react";

export default class Display extends Component {
	render() {
		return (
			<div className="display">
				<div>{this.props.value}</div>
			</div>
		);
	}
}
