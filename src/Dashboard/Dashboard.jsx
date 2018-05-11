import React from 'react';
import { HashRouter, NavLink, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { HomePage } from '../HomePage';
import { LobbyListPage } from '../LobbyListPage';
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
                    <ul className="navigation">
                        <li><NavLink to="/lobbies">Lobbies</NavLink></li>
                        <li><NavLink to="/account">{user.username}</NavLink></li>
                        <li><a href="/login">Logout</a></li>
                    </ul>
                    <div className="col-md-6 col-md-offset-3">
                        <Route exact path="/" component={HomePage} />
                        <Route path="/account" component={AccountPage} />
                        <Route path="/lobbies" component={LobbyListPage} />
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
