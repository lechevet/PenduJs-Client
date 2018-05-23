import React from 'react'
import letters from './Letters'
import { connect } from 'react-redux'
import { hangmanActions } from '../_actions'

const GuessLetters = hangmanActions.GuessLetters;

class Buttons extends React.Component {

  makeGuess(letter){
     this.props.GuessLetters(letter)
  }

  renderLetter(letter, index) {
    return (
      <button
        key={index}
        onClick={this.makeGuess.bind(this, letter)}
        disabled={this.props.status === 'winner' || this.props.status === 'loser'}>
        {letter}</button>
        );
  }

  render() {
    return (
      <div>
        {letters.map(this.renderLetter.bind(this))}
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
    status: state.hangman.status

  }
}


export default connect(mapStateToProps, { GuessLetters })(Buttons);