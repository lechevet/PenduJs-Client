import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Menu } from './Menu';
import { MainView } from './MainView';

import './DashboardPage.css';

class DashboardPage extends Component {

    render() {
        return (
            <HashRouter>
                <div className="dashboardpage">
                    <Menu />
                    <MainView />
                </div>
            </HashRouter>
        );
    }
}

function mapStateToProps(state) {
    return { state };
}

const connectedDashboardPage = connect(mapStateToProps)(DashboardPage);

export { connectedDashboardPage as DashboardPage };