import React, { Component } from 'react';
import { withData } from '../../context/Data';
import MailList from '../MailList';

class InboxList extends Component {
	render() {
		const { data } = this.props;
		return (
			<MailList
				listclass="t-inbox-list"
				list={data.inbox}
				adress="/app/inbox/"
				inbox={true}
			>
			</MailList>
		);
	};
};

export default withData(InboxList);
