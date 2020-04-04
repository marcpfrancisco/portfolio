import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Works from "./pages/Works";
import "./App";

export class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<NavBar />
					<Layout>
						<Switch>
							<Route path="/about" component={About} />
							<Route path="/blog" component={Blog} />
							<Route path="/works" component={Works} />
						</Switch>
					</Layout>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
