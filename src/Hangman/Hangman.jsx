import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { words } from '../_helpers';
import Buttons  from './Buttons';

class Hangman extends React.Component {

  getTitle()
  {
    return ("Hangmaaaaaaaaan !");
  }

  render() {
    return (
      <div>
        <h2>{this.getTitle()}</h2>
        <p>
          { this.props.hangman.format }
        </p>
        <Buttons />
        <p>
         Wrong Guesses: { this.props.hangman.wrongGuessesCount }
        </p>
        <p>
          Letters used : {this.props.hangman.guesses.join(', ')}
        </p>
        <p>
          Status: {this.props.hangman.status}
        </p>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { lobby, authentication, hangman } = state;
  const { user } = authentication;
  return {
      user,
      lobby,
      hangman
  };
}

const connectedHangman = connect(mapStateToProps)(Hangman);
export { connectedHangman as Hangman };