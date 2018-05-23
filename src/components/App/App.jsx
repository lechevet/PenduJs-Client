import React, { Component } from 'react';
import { connect } from 'react-redux';

import { LoginPage } from '../LoginPage';
import { DashboardPage } from '../DashboardPage';
import './App.css';


class App extends Component {

  render() {
    const { user } = this.props;
    const homeOrLog = user ? (<DashboardPage />) : (<LoginPage />);

    return (
      <div className="app">
        <div className="app-header">
          <h1>PenduJS</h1>
        </div>
        <div className="app-content">
          { homeOrLog }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    authentication,
    user
  };
}

const connectedApp = connect(mapStateToProps)(App);

export { connectedApp as App };
