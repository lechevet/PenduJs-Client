import React, { Component } from 'react';
import { connect } from 'react-redux';

import { lobbyActions } from '../../actions';
import { Hangman } from './Hangman';

import './LobbyPage.css';

class LobbyPage extends Component {
    componentWillMount() {
        this.props.dispatch(lobbyActions.getById(this.props.match.params.id));
    }

    render() {
        const { user, lobby } = this.props;
        return (
            <div className="lobby-page">
                { lobby.item &&
                    <h1>Lobby {  lobby.item.name }</h1>
                }
                <Hangman id={this.props.match.params.id}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { lobby } = state;
    const { user } = state.authentication;
    return {
        user,
        lobby
    }
}

const connectedLobbyPage = connect(mapStateToProps)(LobbyPage);

export { connectedLobbyPage as LobbyPage };
