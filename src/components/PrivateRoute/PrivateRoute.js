import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

import AppRouter from '../AppRouter';

class PrivateRoute extends Component {
	render() {
		const {isAuthorized} = this.props;

		return (
			<Route>
				{isAuthorized ? (
					<Route path="/app" component={AppRouter} />
				) : (
					<Redirect to="/login" />
				)}
			</Route>
		);
	};
};

export default withAuth(PrivateRoute);
