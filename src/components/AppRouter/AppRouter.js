import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import classes from './AppRouter.module.css';

class AppRouter extends Component {
	render() {
		return (
			<div className={classes.wrapper}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<ul className={classes.navList + " t-nav-list"}>
							<li className={classes.navElement}>
								<Link
									to="/app"
									className={classes.link + " t-link-home"}
								>
									Home
								</Link>
							</li>
							<li className={classes.navElement}>
								<Link
									to="/app/inbox"
									className={classes.link + " t-link-inbox"}
								>
									Inbox
								</Link>
							</li>
							<li className={classes.navElement}>
								<Link
									to="/app/outbox"
									className={classes.link + " t-link-outbox"}
								>
									Outbox
								</Link>
							</li>
						</ul>
					</nav>
					<div className={classes.content}>
						<Route exact path='/app' render={() => (
							<Fragment>
								<h3 className={classes.title}>Home</h3>
								<Home/>
							</Fragment>
						)}/>
						<Route path='/app/inbox' render={() => (
							<Fragment>
								<h3 className={classes.title}>Inbox</h3>
								<InboxList/>
							</Fragment>
						)}/>
						<Route path='/app/outbox' render={() => (
							<Fragment>
								<h3 className={classes.title}>Outbox</h3>
								<OutboxList/>
							</Fragment>
						)}/>
					</div>
				</div>
			</div>
		);
	};

};

export default AppRouter;
