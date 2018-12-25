import React, {Component} from 'react';
import Message from '../Message/Message';
import './Chat.css';

class Chat extends Component {
	state = {
		messages: [],
		messageInput: ''
	};

	render() {
		return(
			<div className="chat">
				{this.state.messages.map(item =>
					<Message
						text={item.text}
						key={item.id}
					/>
				)}
				<input
					className="input-message"
					type="text"
					onChange={this.changeInputMessage}
					onKeyUp={this.sendMessageOnEnter}
				/>
			</div>
		);
	};

	changeInputMessage = (event) => {
		this.setState({
			messageInput: event.target.value
		});
	};

	sendMessageOnEnter = (event) => {
		if(event.key !== 'Enter') {
			return
		} else if (this.state.messageInput === '') {
			return
		} else {
			this.setState({
				messages: [{text: this.state.messageInput, id: Date.now().toString()}, ...this.state.messages],
				messageInput: ''
			});
			event.target.value = '';
		};
	};
};

export default Chat;