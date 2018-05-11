import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        return (
                <div className="homepage">
                    <h1>{ "Hey " + user.username + " !"}</h1>
                    <h2>Welcome to PenduJS !</h2>
                </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user,
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
