import React from 'react';
import { connect } from 'react-redux';

import { ServerAPI } from '../../../classes';
import { Buttons }  from '../Buttons';
import { gameActions } from '../../../actions';
import pendu0 from '../../../assets/img/pendu0.jpg';
import pendu1 from '../../../assets/img/pendu1.jpg';
import pendu2 from '../../../assets/img/pendu2.jpg';
import pendu3 from '../../../assets/img/pendu3.jpg';
import pendu4 from '../../../assets/img/pendu4.jpg';
import pendu5 from '../../../assets/img/pendu5.jpg';
import pendu6 from '../../../assets/img/pendu6.jpg';
import pendu7 from '../../../assets/img/pendu7.jpg';
import pendu8 from '../../../assets/img/pendu8.jpg';

import './Hangman.css';

class Hangman extends React.Component {
  constructor(props) {
    super(props);

    this.handleRestart = this.handleRestart.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    this.client = new ServerAPI();
    this.client.connect(this.props.id);
    this.client.onGame((res) => {
      dispatch(gameActions.getRes(res));
    });
  }

  componentWillUnmount() {
    this.client.disconnect();
  }

  handleRestart() {
    this.client.restart();
  }

  render() {
    const pendu = [pendu0, pendu1, pendu2, pendu3, pendu4, pendu5, pendu6, pendu7, pendu8];
    const { game } = this.props;
    return (
      <div>
        <h2>
          Status: { game.item && game.item.status }
        </h2>
        { game.item && game.item.word &&
          <div className="end-game">
            <div style={{display: 'inline-block'}}>Word was: { game.item.word}</div>
          </div>
        }
        { game.item  &&
        (game.item.status === "winner" || game.item.status === "loser") &&
          <div className="app-btn restart-btn" onClick={this.handleRestart}>
            Restart
          </div>
        }
        <div>
          { game.item && <img src={pendu[game.item.wrongGuessCount]} alt="hangman"/> }
        </div>
        <p>
          { game.item && game.item.format }
        </p>
        <Buttons client={this.client}/>
        <p>
         Wrong Guesses: { game.item && game.item.wrongGuessCount }
        </p>
        <p>
          Letters used : { game.item && game.item.guesses && game.item.guesses.join() }
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { lobby, authentication, game } = state;
  const { user } = authentication;
  return {
      user,
      lobby,
      game
  };
}

const connectedHangman = connect(mapStateToProps)(Hangman);
export { connectedHangman as Hangman };