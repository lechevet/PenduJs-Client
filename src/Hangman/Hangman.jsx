import React from 'react';
import _ from 'underscore';
import { connect } from 'react-redux';
import { words } from '../_helpers';
import Buttons  from './Buttons';
import pendu0 from '../images/pendu0.jpg';
import pendu1 from '../images/pendu1.jpg';
import pendu2 from '../images/pendu2.jpg';
import pendu3 from '../images/pendu3.jpg';
import pendu4 from '../images/pendu4.jpg';
import pendu5 from '../images/pendu5.jpg';
import pendu6 from '../images/pendu6.jpg';
import pendu7 from '../images/pendu7.jpg';
import pendu8 from '../images/pendu8.jpg';

class Hangman extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pendu = [pendu0, pendu1, pendu2, pendu3, pendu4, pendu5, pendu6, pendu7, pendu8];
    return (
      <div>
        <div>
          <img src={pendu[this.props.hangman.wrongGuessesCount]}/>
        </div>
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