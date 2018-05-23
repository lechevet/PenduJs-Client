import React from 'react';
import _ from 'underscore';
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


class Hangman extends React.Component {
  constructor(props) {
    super(props);
    this.game = {
      format: "_ _ _ _ _ _ _ _",
      guesses: [],
      wrongGuessCount: 0
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.client = new ServerAPI();
    this.client.connect();
    this.client.onGame((res) => {
      dispatch(gameActions.getRes(res));
    });
  }

  render() {
    const pendu = [pendu0, pendu1, pendu2, pendu3, pendu4, pendu5, pendu6, pendu7, pendu8];
    const { game } = this.props;
    return (
      <div>
        <div>
          <img src={pendu[game.item.wrongGuessCount]}/>
        </div>
        <p>
          { game.item.format }
        </p>
        <Buttons client={this.client}/>
        <p>
         Wrong Guesses: { game.item.wrongGuessCount }
        </p>
        <p>
          Letters used : { game.item.guesses && game.item.guesses.join() }
        </p>
        <p>
          Status: { game.item.status }
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