import { authenticationConstants} from '../constants';

export function authentication(state = {}, action) {
    switch (action.type) {
        case authenticationConstants.REGISTER_OPEN:
            return { registration: true };
        case authenticationConstants.REGISTER_CLOSE:
            return { registration: false };
        case authenticationConstants.REGISTER_REQUEST:
            return {
                registration: true,
                registering: true
            };
        case authenticationConstants.REGISTER_SUCCESS:
            return {
            };
        case authenticationConstants.REGISTER_FAILURE:
            return { registration: true };
        case authenticationConstants.LOGIN_REQUEST:
            return { logginIn: true };
        case authenticationConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user : action.user
            };
        case authenticationConstants.LOGIN_FAILURE:
            return { };
        case authenticationConstants.LOGOUT:
            return { };
        default:
            return state;
    }
}