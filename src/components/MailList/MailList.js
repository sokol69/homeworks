import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';
import classes from './MailList.module.css';

class MailList extends Component {
	render() {
		return (
			<div className={classes.container + " " + this.props.listclass}>
				<Route path={this.props.adress + ":id"} component={this.props.inbox ? InboxMail : OutboxMail} />
				{this.props.list.map(item => 
					<Fragment key={item.id}>
						<Link
							to={`${this.props.adress}${item.id}`}
							className={classes.link}
						>
							{item.body}
						</Link>
					</Fragment>
				)}
			</div>
		);
	};
};

export default MailList;
