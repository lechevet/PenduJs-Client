import React, { Component } from 'react';
import * as SocketIO from 'socket.io-client';

import { connect } from 'react-redux';
import letters from './Letters';


class Buttons extends Component {

    makeGuess(letter) {
        this.props.client.makeGuess('guessLetter', letter);
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
    const { lobby } = state;
    return {
        lobby
    };
}

const connectedButtons = connect(mapStateToProps)(Buttons);

export { connectedButtons as Buttons };

/*
           */