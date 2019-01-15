import React, { Component, Fragment } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';



class PrivateRoute extends Component {
	render() {
		const loginPath = "/login";
		return (
			<Fragment>
				{isAuthorized ? (
					<div>PrivateRoute</div>
				) : (
					<Redirect to={loginPath} />
				)}
			</Fragment>
		);
	};
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
}

export default withAuth(PrivateRoute);
