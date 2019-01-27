import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';

class AppRouter extends Component {
	render() {
		return (
			<div className="App">
				<Route path="/" exact component={Search} />
				<Route path="/show/:id" component={ShowPage} />
			</div>
		);
	};
};

export default AppRouter;
