import { userConstants} from '../constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.UPDATE_OPEN:
            return { update: true };
        case userConstants.UPDATE_CLOSE:
            return { update: false };
        case userConstants.UPDATE_REQUEST:
            return { updating: true };
        case userConstants.UPDATE_FAILURE:
            return { error: action.error };
        case userConstants.UPDATE_SUCCESS:
            return { 
                update: false,
                user: action.user
            };
        default:
            return state;
    }
}