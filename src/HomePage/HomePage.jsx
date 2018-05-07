import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { lobbyActions } from '../_actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lobby: {
                name: ''
            },
            submitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }
    
    componentDidMount() {
        this.props.dispatch(lobbyActions.getAll());
    }

    handleRedirect(id) {
        const { lobby } = this.state;
        const { dispatch } = this.props;
        dispatch(lobbyActions.getById(id));
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { lobby } = this.state;
        this.setState({
            lobby: {
                ...lobby,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { lobby } = this.state;
        const { dispatch } = this.props;
        if (lobby.name) {
            dispatch(lobbyActions.create(lobby));
        }
    }

    render() {
        const { user, lobbies } = this.props;
        const { lobby, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered lobbies:</h3>
                {lobbies.loading && <em>Loading lobbies...</em>}
                {lobbies.error && <span className="text-danger">ERROR: {lobbies.error}</span>}
                {lobbies.items &&
                    <ul>
                        {lobbies.items.map((lobby, index) =>
                            <li key={lobby.id}>
                                {"Lobby n°" + lobby.id + " : "}
                                {

                                    <span><a onClick={() => this.handleRedirect(lobby.id)}>{lobby.name}</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !lobby.name ? ' has-error' : '')}>
                        <label htmlFor="name">Lobby Name</label>
                        <input type="text" className="form-control" name="name" value={lobby.name}  onChange={this.handleChange} />
                        {submitted && !lobby.name &&
                            <div className="help-block">Lobby Name is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Create Lobby</button>
                    </div>
                </form>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { lobbies, lobby, authentication } = state;
    const { user } = authentication;
    const { hangman } = "";
    return {
        user,
        lobbies,
        lobby,
        hangman
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
