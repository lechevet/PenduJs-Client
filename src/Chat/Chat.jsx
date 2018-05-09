import React from 'react';
import _ from 'underscore';
import MessageList from './MessageList';
import PostMessageForm from './PostMessageForm';

class Chat extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            messages: []
        };
        this.appendChatMessage = this.appendChatMessage.bind(this);
    }

    appendChatMessage(owner, text) {
        let newMessage = {
            id: this.state.messages.length + 1,
            timestamp: new Date().getTime(),
            owner: owner,
            text: text
        };
        this.setState({ messages: [ ...this.state.messages, newMessage ]});
    }

    render() {
        return (
            <div className="Chatbox">
                <MessageList messages={this.state.messages} />
                <PostMessageForm appendChatMessage={this.appendChatMessage} />
            </div>
        );
    }
}
  
export { Chat as Chat };