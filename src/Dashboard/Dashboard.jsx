import React from 'react';
import { HashRouter, NavLink, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { HomePage } from '../HomePage';
import { LobbyListPage } from '../LobbyListPage';
import { LobbyPage } from '../LobbyPage';
import { AccountPage } from '../AccountPage';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        return (
            <HashRouter>
                <div className="dashboard">
                    <div className="navigation">
                        <NavLink className="btn btn-nav" to="/lobbies">Lobbies</NavLink>
                        <NavLink className="btn btn-nav" to="/account">{user.userName}</NavLink>
                        <a className="btn btn-nav" href="/login">Logout</a>
                    </div>
                    <div className="col-md-6 col-md-offset-3">
                        <Route exact path="/" component={HomePage} />
                        <Route path="/account" component={AccountPage} />
                        <Route path="/lobbies" component={LobbyListPage} />
                        <Route path="/lobby/:id" component={LobbyPage} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

function mapStateToProps(state) {
    const { lobbies, lobby, authentication } = state;
    const { user } = authentication;
    const { hangman } = "";
    return {
        user,
        lobbies,
        lobby,
        hangman
    };
}

const connectedDashboard = connect(mapStateToProps)(Dashboard);
export { connectedDashboard as Dashboard };
