import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Main from "./containers/Main";
import Sub from "./containers/Sub";
export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<ParallaxProvider>
							<Route exact path="/main/" component={Main} />
							<Route exact path="/sub/" component={Sub} />
							<Redirect to="/main" />
						</ParallaxProvider>
					</Switch>
				</div>
			</Router>
		);
	}
}
