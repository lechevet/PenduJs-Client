import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticationActions } from '../../../actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email_address: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    activateRegistration() {
        const { dispatch } = this.props;
        dispatch(authenticationActions.initRegistration());
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { email_address, password } = this.state;
        const { dispatch } = this.props;
        if (email_address && password) {
            dispatch(authenticationActions.login(email_address, password));
        }
    }

    render() {
        const { email_address, password } = this.state;
        const { logginIn } = this.props;
        return (
            <div className="login">
                <div className="form-container">
                    <form onSubmit={this.handleSubmit } className="app-form">
                        <div>
                            Email Address
                        </div>
                        <input className="login-form-input" text="text" name="email_address" value={email_address} onChange={this.handleChange} />
                        <div>
                            Password
                        </div>
                        <input className="login-form-input" type="password" name="password" value={password} onChange={this.handleChange} />
                        <div>
                            <input className="login-form-btn login-btn" type="submit" value="Login" />
                            {logginIn &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading" />
                            }
                        </div>
                    </form>
                    <button className="login-form-btn register-btn" onClick={() => this.activateRegistration()}>Register</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { logginIn } = state.authentication;
    return {
        logginIn
    };
}

const connectedLogin = connect(mapStateToProps)(Login);

export { connectedLogin as Login };