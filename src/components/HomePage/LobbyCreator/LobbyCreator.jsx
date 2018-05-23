import React, { Component } from 'react';
import { connect } from 'react-redux';

import { lobbyActions } from '../../../actions';

import './LobbyCreator.css';

class LobbyCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lobby: {
                name: ''
            },
            submitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { lobby } = this.state;
        this.setState({
            lobby: {
                ...lobby,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { lobby } = this.state;
        const { dispatch } = this.props;
        if (lobby.name) {
            dispatch(lobbyActions.create(lobby));
            // TODO ADD CALL TO JOIN
        }
    }

    render() {
        const { user } = this.props;
        const { submitted, lobby } = this.state;
        return (
            <div className="lobby-creator">
                <h2>Create a lobby</h2>
                <form className="lobby-form" onSubmit={this.handleSubmit}>
                        <input type="text" className="input-lobby-name" name="name" placeholder="Lobby name" value={lobby.name}  onChange={this.handleChange} />
                        <button className="app-btn btn-create-lobby">Create</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;

    return {
        user
    };
}

const connectedLobbyCreator = connect(mapStateToProps)(LobbyCreator);

export { connectedLobbyCreator as LobbyCreator };
