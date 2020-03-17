import React, { Component } from 'react';
import './cmp_calc.css';
import $ from 'jquery';

class CmpCalc extends Component {
	constructor(props) {
		super(props);
		this.state = { srv_resp: 0 };
	}

	callAddNumbers = () => {
		function tryParseInt(s, v) {
			if (s == null) return v;
			if (s == '') return v;
			try {
				return parseInt(s);
			} catch {
				return v;
			}
		}

		let self = this;
		let x = tryParseInt($('#txt_x').val(), 0);
		let y = tryParseInt($('#txt_y').val(), 0);
		// debugger;

		$.post('add-numbers', { x, y }, (d, s) => {
			console.log({ d, s });
			self.setState({ srv_resp: d['result'] });
		});
	};

	render() {
		return (
			<div className="p-3">
				<h1 className="title center">Add Numbers in Backend</h1>
				<p>Press the button to get the server result</p>
				<input id="txt_x" type="number" className="p-2" placeholder="X = ?" />
				<br />
				<input id="txt_y" type="number" className="p-2" placeholder="Y = ?" />
				<br />
				<button className="btn btn-primary m-1" onClick={this.callAddNumbers}>
					CALL REST API ADD
				</button>
				<br />
				<span>[SERVER RESULT]: {this.state.srv_resp}</span>
				<hr />
			</div>
		);
	}
}

export default CmpCalc;
