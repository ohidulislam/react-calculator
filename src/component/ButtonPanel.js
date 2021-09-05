import React, { Component } from "react";

export default class ButtonPanel extends Component {
	handleClick = ({ target }) => {
		// console.log(e.target.name);
		this.props.clickHandler(target.name);
	};

	render() {
		return (
			<div className="button-panel">
				<div className="row">
					<button name="ac" onClick={(e) => this.handleClick(e)}>
						ac
					</button>
					<button name="+/-" onClick={(e) => this.handleClick(e)}>
						+/-
					</button>
					<button name="%" onClick={(e) => this.handleClick(e)}>
						%
					</button>
					<button name="÷" onClick={(e) => this.handleClick(e)}>
						÷
					</button>
				</div>
				<div className="row">
					<button name="7" onClick={(e) => this.handleClick(e)}>
						7
					</button>
					<button name="8" onClick={(e) => this.handleClick(e)}>
						8
					</button>
					<button name="9" onClick={(e) => this.handleClick(e)}>
						9
					</button>
					<button name="x" onClick={(e) => this.handleClick(e)}>
						x
					</button>
				</div>
				<div className="row">
					<button name="4" onClick={(e) => this.handleClick(e)}>
						4
					</button>
					<button name="5" onClick={(e) => this.handleClick(e)}>
						5
					</button>
					<button name="6" onClick={(e) => this.handleClick(e)}>
						6
					</button>
					<button name="-" onClick={(e) => this.handleClick(e)}>
						-
					</button>
				</div>
				<div className="row">
					<button name="1" onClick={(e) => this.handleClick(e)}>
						1
					</button>
					<button name="2" onClick={(e) => this.handleClick(e)}>
						2
					</button>
					<button name="3" onClick={(e) => this.handleClick(e)}>
						3
					</button>
					<button name="+" onClick={(e) => this.handleClick(e)}>
						+
					</button>
				</div>
				<div className="row">
					<button name="0" onClick={(e) => this.handleClick(e)} className="wide">
						0
					</button>
					<button name="." onClick={(e) => this.handleClick(e)}>
						.
					</button>
					<button name="=" onClick={(e) => this.handleClick(e)}>
						=
					</button>
				</div>
			</div>
		);
	}
}
