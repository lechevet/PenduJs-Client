import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import { HomePage } from '../../HomePage';
import { AccountPage } from '../../AccountPage';
import { LobbyPage } from '../../LobbyPage';

import './MainView.css';

class MainView extends Component {
    render() {
        return (
            <HashRouter>
                <div className="main-view">
                    <div className="routes">
                        <Route exact path="/" component={HomePage} />
                        <Route path="/account" component={AccountPage} />
                        <Route path="/lobby/:id" component={LobbyPage} />
                    </div>
                 </div>
            </HashRouter>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedMainView = connect(mapStateToProps)(MainView);

export { connectedMainView as MainView };