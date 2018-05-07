import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { lobbies } from './lobbies.reducer';
import { alert } from './alert.reducer';
import { lobby } from './lobby.reducer';
import hangman from './hangman.reducer';


const rootReducer = combineReducers({
  authentication,
  registration,
  lobbies,
  hangman,  
  lobby,
  users,
  alert
});

export default rootReducer;