import React, { Component } from 'react';
import classes from './Mail.module.css';

class Mail extends Component {
	render() {
		return (
			<div className={classes.container}>
					{this.props.inbox ? (
						<p className="t-mail-from">From: <b>{this.props.from}</b></p>
					) : (
						<p className="t-mail-to">To: <b>{this.props.to}</b></p>
					)}
				<p className="t-mail-body">{this.props.body}</p>
			</div>
		);
	};
};

export default Mail;

// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
