import { authenticationConstants } from '../redux/constants';
import { userService } from '../services';

export const authenticationActions = {
    initRegistration,
    closeRegistration,
    register,
    login,
    logout
}

function initRegistration() {
    return { type: authenticationConstants.REGISTER_OPEN };
}

function closeRegistration() {
    return { type: authenticationConstants.REGISTER_CLOSE };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: authenticationConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: authenticationConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: authenticationConstants.REGISTER_FAILURE, error } }
}

function login(email_address, password) {
    return dispatch => {
        dispatch(request());

        userService.login(email_address, password)
            .then(
                user => { 
                    dispatch(success(user)); 
                },
                error => { dispatch(failure(error)); }
            );
    };

    function request() { return { type: authenticationConstants.LOGIN_REQUEST } }
    function success(user) { return { type: authenticationConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authenticationConstants.LOGIN_FAILURE, error } }
}

function logout() {
    localStorage.clear();
    return { type: authenticationConstants.LOGOUT };
}