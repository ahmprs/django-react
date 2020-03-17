import React, { Component } from 'react';
import './cmp_say_hello.css';
import $ from 'jquery';

class CmpSayHello extends Component {
	constructor(props) {
		super(props);
		this.state = { srv_greeting: '[NOTHING]' };
	}

	callSayHello = () => {
		let self = this;
		$.post('say-hello', {}, (d, s) => {
			console.log({ d, s });
			self.setState({ srv_greeting: d['result'] });
		});
	};

	render() {
		return (
			<div className="p-3">
				<h1 className="title center">Hello everybody</h1>
				<p>Press the button to get the server side greetings</p>
				<button onClick={this.callSayHello} className="btn btn-primary">
					CALL SERVER
				</button>
				<br />
				<span>{this.state.srv_greeting}</span>
			</div>
		);
	}
}

export default CmpSayHello;
