import React from 'react';

class PostMessageForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.appendChatMessage(this.nameInput.value, this.messageInput.value);
        this.nameInput.value = '';
        this.messageInput.value = '';
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    ref={name => this.nameInput = name}
                    placeholder="Name"/>
                <input type="text"
                    ref={message => this.messageInput = message}
                    placeholder="Message"/>
                <input type="submit" value="Send"/>
            </form>
        );
    }
}

export default PostMessageForm;