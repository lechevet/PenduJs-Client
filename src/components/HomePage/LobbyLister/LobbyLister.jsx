import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { lobbyActions } from '../../../actions';

import './LobbyLister.css';
import refresh from '../../../assets/icons/refresh-btn.png';

class LobbyLister extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
    }
    
    componentWillMount() {
        this.props.dispatch(lobbyActions.getAll());
    }

    handleDelete(id) {
        const { dispatch } = this.props;
        dispatch(lobbyActions._delete(id));
    }

    handleRefresh() {
        const { dispatch } = this.props;
        dispatch(lobbyActions.getAll());
    }
    
    render() {
        const { user, lobbies } = this.props;
        return (
            <div className="lobby-lister">
                <h2>
                    Lobbies :
                    <img className="refresh-btn" onClick={this.handleRefresh} src={refresh} alt="refresh" /> 
                </h2>
                {lobbies && lobbies.loading && <em>Loading lobbies...</em>}
                {lobbies && lobbies.error && <span className="text-danger">ERROR: {lobbies.error}</span>}
                {lobbies && lobbies.items &&
                    <ul>
                        {lobbies.items.map((lobby, index) =>
                            <div className="app-lobby-list">
                                <NavLink style={{textDecoration: "none" }} to={"/lobby/" + lobby._id}>
                                    <div className="app-lobby" key={lobby._id}>
                                        <span className="app-lobby-text">{lobby.name}</span>
                                    </div>
                                </NavLink>
                            </div>
                        )}
                    </ul>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { lobbies } = state;
    const { user } = state.authentication;
    return {
        user,
        lobbies
    };
}

const connectedLobbyLister = connect(mapStateToProps)(LobbyLister);

export { connectedLobbyLister as LobbyLister };
