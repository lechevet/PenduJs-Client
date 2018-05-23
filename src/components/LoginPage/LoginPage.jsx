import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Login } from './Login';
import { Register } from './Register';

import './LoginPage.css';

class LoginPage extends Component {
    render() {
        const { registration } = this.props;
        const loginOrRegister = (registration ) ? (<Register />) : (<Login />); 
        return (
            <div className="loginpage">
                { loginOrRegister }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { registration } = authentication;
    return {
        registration
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);

export { connectedLoginPage as LoginPage };