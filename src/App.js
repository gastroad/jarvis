import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import Main from "./containers/Main";
import "./index.css";
export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/main/" component={Main} />
						<Redirect to="/main" />
					</Switch>
				</div>
			</Router>
		);
	}
}
