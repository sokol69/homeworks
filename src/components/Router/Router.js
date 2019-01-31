import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login';
import Search from '../Search';
import PrivateRoute from '../PrivateRoute';

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Login} />
					<PrivateRoute path="/search" component={Search} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		);
	};
};

export default Router;
