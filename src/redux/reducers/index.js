import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { lobbies } from './lobbies.reducer';
import { lobby } from './lobby.reducer';
import { game } from './game.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    lobbies,
    lobby,
    game
});

export default rootReducer;