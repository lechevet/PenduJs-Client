import { hangmanConstants } from '../_constants';

export const hangmanActions = {
   GuessLetters
};

function GuessLetters(letter) {
    return {
      type: hangmanConstants.GUESS_LETTER,
      payload: letter
    }
  }