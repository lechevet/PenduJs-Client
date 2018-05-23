import { lobbyConstants } from '../_constants';

export function lobbies(state = {}, action) {
  switch (action.type) {
    case lobbyConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case lobbyConstants.GETALL_SUCCESS:
      return {
        items: action.lobbies
      };
    case lobbyConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}