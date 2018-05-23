import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authenticationActions } from '../../../actions';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email_address: '',
                userName: '',
                password1: '',
                password2: ''
            },
            submitted: false
        };
        
        this.desactivateRegistration = this.desactivateRegistration.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    desactivateRegistration() {
        const { dispatch } = this.props;
        dispatch(authenticationActions.closeRegistration());
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({ 
            user: {
                ...user,
                [name]: value
            }
         });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.userName && user.password1 && user.password2) {
            dispatch(authenticationActions.register(user));
        }
    }

    render() {
        const { user } = this.state;
        const { registering } = this.props;
        return (
            <div className="register">
                <div className="form-container">
                    <form className="app-form" onSubmit={this.handleSubmit}>
                        <div>
                            Email address
                        </div>
                        <input className="login-form-input" text="text" name="email_address" value={user.email_address} onChange={this.handleChange}/>
                        <div>
                            Username
                        </div>
                        <input className="login-form-input" text="text" name="userName" value={user.userName} onChange={this.handleChange}/>
                        <div>
                            Password
                        </div>
                        <input className="login-form-input" text="text" name="password1" value={user.password1} onChange={this.handleChange}/>
                        <div>
                            Confirm your password
                        </div>
                        <input className="login-form-input" type="password" name="password2" value={user.password2} onChange={this.handleChange} />
                        <div>
                            <input className="login-form-btn register-btn" type="submit" value="Register" />
                            {registering &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading" />
                            }
                        </div>
                    </form>
                    <button className="login-form-btn login-btn" onClick={() => this.desactivateRegistration()}>Login</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { registering } = state.authentication;
    return {
        registering
    };
}

const connectedRegister = connect(mapStateToProps)(Register);

export { connectedRegister as Register };