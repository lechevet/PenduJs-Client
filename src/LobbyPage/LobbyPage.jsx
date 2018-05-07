import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { lobbyActions } from '../_actions';

import { Hangman } from '../Hangman';

class LobbyPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(lobbyActions.getById(this.props.match.params.id));
    }

    render() {
        const { user, lobby } = this.props;
        const { word } = "Bonjour";
        return (
            <div className="col-md-6 col-md-offset-3">
                {lobby.loading && <em>Loading lobbies...</em>}
                {lobby.error && <span className="text-danger">ERROR: {lobbies.error}</span>}
                {lobby.item &&
                    <h1>Lobby n°{lobby.item.id} : {lobby.item.name}</h1>
                }
              <Hangman/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { lobbies, lobby, authentication } = state;
    const { user } = authentication;
    return {
        user,
        lobby,
        lobbies
    };
}

const connectedLobbyPage = connect(mapStateToProps)(LobbyPage);
export { connectedLobbyPage as LobbyPage };