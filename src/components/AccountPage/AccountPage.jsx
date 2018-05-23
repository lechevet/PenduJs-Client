import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Update } from './Update';

import './AccountPage.css';

import  userIcon  from '../../assets/icons/user-icon.png';

class AccountPage extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="accountpage">
                <h1> Hello { user && user.userName } ! </h1>
                <h2>
                    <img className="user-icon" src={userIcon} alt="user" />
                    { user.Username}
                </h2>
                <Update />
            </div>
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

const connectedAccountPage = connect(mapStateToProps)(AccountPage);

export { connectedAccountPage as AccountPage };
