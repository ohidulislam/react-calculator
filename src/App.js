import React, { Component } from "react";
import Display from "./component/Display";
import ButtonPanel from "./component/ButtonPanel";
import calculate from "./logic/calculate";

import "./App.css";

export default class App extends Component {
	state = {
		total: null,
		next: null,
		operation: null,
	};

	handleClick = (buttonName) => {
		// console.log(buttonName);
		this.setState(calculate(this.state, buttonName));
	};

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<h2>A simple React Calculator</h2>
				<div className="calculator">
					<Display value={this.state.next || this.state.total || 0} />
					<ButtonPanel clickHandler={this.handleClick} />
				</div>
			</div>
		);
	}
}
