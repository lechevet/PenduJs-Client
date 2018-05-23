import { lobbyConstants } from '../constants';

export function lobby(state = {}, action) {
    switch (action.type) {
        case lobbyConstants.CREATE_REQUEST:
            return { 
              creating: true
            };
        case lobbyConstants.CREATE_SUCCESS:
          return {
              item: action.lobby,
            };
        case lobbyConstants.CREATE_FAILURE:
            return {
                item: action.error
            };
        case lobbyConstants.GET_REQUEST:
            return {
              loading: true
            };
        case lobbyConstants.GET_SUCCESS:
            return {
              item: action.lobby
            };
        case lobbyConstants.GET_FAILURE:
            return { 
              error: action.error
            };
        default:
            return state
    }
}