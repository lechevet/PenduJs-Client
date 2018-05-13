import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                    <h1>{ "Hey " + user.userName + " !"}</h1>
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
