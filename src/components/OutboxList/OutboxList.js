import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class OutboxList extends Component {
	render() {
		const { data } = this.props;
		return (
			<MailList
				listclass="t-outbox-list"
				list={data.outbox}
				adress="/app/outbox/"
			>
			</MailList>
		);
	};
};

export default withData(OutboxList);
