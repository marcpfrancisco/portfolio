import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";

import Heading from "./pages/Heading";
import "./App";

export class App extends Component {
	render() {
		return (
			<Router basename="/">
				<React.Fragment>
					<NavBar />
					<Layout>
						<Heading />
					</Layout>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
