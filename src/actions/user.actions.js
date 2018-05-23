import { userConstants } from '../redux/constants';
import { userService } from '../services';

export const userActions = {
    activateUpdate,
    desactivateUpdate,
    update
}

function activateUpdate() {
    return { type: userConstants.UPDATE_OPEN };
}

function desactivateUpdate() {
    return { type: userConstants.UPDATE_CLOSE };
}

function update(id, user) {
    return dispatch => {
        dispatch(request());

        userService.update(id, user)
            .then(
                user => dispatch(success(user)),
                error => dispatch(failure(error))
            );
    };


    function request() { return { type: userConstants.UPDATE_REQUEST } }
    function success(user) { return { type: userConstants.UPDATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_FAILURE, error } }
}