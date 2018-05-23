import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticationActions } from '../../../actions';

import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        const { dispatch } = this.props;
        dispatch(authenticationActions.logout());        
    }

    render() {
        const { user } = this.props;
        return (
            <div className="menu">
                <NavLink exact className="menu-link home" to="/">
                    Home
                </NavLink>
                <NavLink exact className="menu-link account" to="/account">
                    { user && user.userName }
                </NavLink>
                <a className="menu-link fake-btn" onClick={() => this.logout()}>Logout</a>
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

const connectedMenu = connect(mapStateToProps, null, null, {
    pure: false
})(Menu);

export { connectedMenu as Menu };
