import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { lobbies } from './lobbies.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    lobbies
});

export default rootReducer;