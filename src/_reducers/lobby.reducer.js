import { lobbyConstants } from '../_constants';

export function lobby(state = {}, action) {
  switch (action.type) {
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