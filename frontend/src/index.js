import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import CmpSayHello from './components/cmp_say_hello/cmp_say_hello';
import CmpCalc from './components/cmp_calc/cmp_calc';

const routing = (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/resp-api-say-hello">REST API call say hello</Link>
				</li>
				<li>
					<Link to="/resp-api-add-numbers">REST API call add numbers</Link>
				</li>
			</ul>
			<Route exact path="/" component={App} />
			<Route path="/resp-api-say-hello" component={CmpSayHello} />
			<Route path="/resp-api-add-numbers" component={CmpCalc} />
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
