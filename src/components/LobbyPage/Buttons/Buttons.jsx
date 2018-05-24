import React, { Component } from 'react';

import { connect } from 'react-redux';
import letters from './Letters';

import './Buttons.css';

class Buttons extends Component {

    makeGuess(letter) {
        this.props.client.makeGuess('guessLetter', letter);
    }

    renderLetter(letter, index) {
      const { game } = this.props;
       return (
          <span>
            { game &&
            <button
            className="hang-button"
            key={index}
            onClick={this.makeGuess.bind(this, letter)}
            disabled={this.props.status === 'winner' || this.props.status === 'loser'}>
            {letter}</button>
          }
        </span>
      );
    }
   
     render() {
       return (
         <div className="hang-button-list">
           {letters.map(this.renderLetter.bind(this))}
         </div>
       )
     }
   }

function mapStateToProps(state) {
    const { lobby, game } = state;
    return {
        lobby,
        game
    };
}

const connectedButtons = connect(mapStateToProps)(Buttons);

export { connectedButtons as Buttons };

/*
           */