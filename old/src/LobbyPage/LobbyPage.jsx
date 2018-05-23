import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { lobbyActions } from '../_actions';

import { Hangman } from '../Hangman';
import { Chat } from '../Chat';

class LobbyPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(lobbyActions.getById(this.props.match.params.id));
    }

    handleReturnHome() {
        this.props.history.push('/');
    }

    render() {
        const { user, lobby } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                {lobby.item &&
                    <h1>Lobby  {lobby.item.name}</h1>
                }
              <Hangman/>
              <Chat/>
              <NavLink className="btn btn-primary btn-quit" to="/lobbies">Quit</NavLink>
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