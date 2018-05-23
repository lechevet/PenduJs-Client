import { lobbyConstants } from '../constants';

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
        case lobbyConstants.CREATE_SUCCESS:
          return {
              items: [...state.items, action.lobby],
            };
        case lobbyConstants.DELETE_REQUEST:
            return {
              ...state,
              items: state.items.map(lobby =>
                lobby._id === action.id
                  ? { ...lobby, deleting: true }
                  : lobby
              )
            };
        case lobbyConstants.DELETE_SUCCESS:
            return {
                items: state.items.filter(lobby => lobby._id !== action.id)
            };
          case lobbyConstants.DELETE_FAILURE:
            return {
                ...state,
                items: state.items.map(lobby => {
                if (lobby._id === action.id) {
                  // make copy of lobby without 'deleting:true' property
                  const { deleting, ...lobbyCopy } = lobby;
                  // return copy of lobby with 'deleteError:[error]' property
                  return { ...lobbyCopy, deleteError: action.error };
                }
                return lobby;
              })
            };
        default:
            return state
    }
}