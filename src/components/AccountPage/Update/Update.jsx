import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../../actions';

import './Update.css';

class Update extends Component {
    constructor(props) {
        super(props);

        const { user } = this.props;

        this.state = {
            toUpdateUser: {
                email_address: user.email_address,
                userName: user.userName,
                password1: user.password1,
                Id: user.Id
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.desactivateUpdate = this.desactivateUpdate.bind(this);
        this.activateUpdate = this.activateUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    activateUpdate() {
        const { dispatch } = this.props;
        dispatch(userActions.activateUpdate());
    }

    desactivateUpdate() {
        const { dispatch } = this.props;
        dispatch(userActions.desactivateUpdate());
    }

    handleSubmit(event) {
        event.preventDefault();
        const { toUpdateUser } = this.state;
        const { dispatch, user } = this.props;
        if (toUpdateUser.Username && toUpdateUser.Password) {
            dispatch(userActions.update(user.Id, toUpdateUser));
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { toUpdateUser } = this.state;
        this.setState({ 
            toUpdateUser: {
                ...toUpdateUser,
                [name]: value
            }
         });
    }

    render() {
        const { toUpdateUser } = this.state;
        const { update } = this.props;
        return (
            <div className="update">
                { !update &&
                    <button className="update-btn btn-update" onClick={() => this.activateUpdate()}>Update</button>
                }
                { update &&
                    <form className="update-form" onSubmit={this.handleSubmit}>
                    <div className="form-titles">
                        <div className="form-input-title">Email Address:</div>
                        <div className="form-input-title">Username:</div>
                        <div classNAme="form-input-title">Password:</div>
                    </div>
                    <div className="form-input">
                        <input className="update-input" type="text" name="email_address" value={toUpdateUser.email_address} onChange={this.handleChange} />
                        <input className="update-input" type="text" name="userName" value={toUpdateUser.userName} onChange={this.handleChange} />
                        <input className="update-input" type="password" name="Password" value={toUpdateUser.Password} onChange={this.handleChange} />
                    </div>
                    <button className="update-btn btn-cancel" onClick={() => this.desactivateUpdate()}>Cancel</button>
                    <button className="update-btn btn-save" type="submit">Save</button>
                </form>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    const { update } = state.users;
    return {
        user,
        update
    };
}

const connectedUpdate = connect(mapStateToProps)(Update);

export { connectedUpdate as Update };