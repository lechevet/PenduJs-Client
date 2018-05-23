import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2> Account informations </h2>
                <p>Username = {user.userName}</p>
                <p>Email = {user.email_address}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return { user };
}

const connectedAccountPage = connect(mapStateToProps)(AccountPage);

export { connectedAccountPage as AccountPage };