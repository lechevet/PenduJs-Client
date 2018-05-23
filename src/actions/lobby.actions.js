import { lobbyService } from '../services';
import { lobbyConstants } from '../redux/constants';

export const lobbyActions = {
    getAll,
    create,
    _delete
}

function getAll() {
    return dispatch => {
        dispatch(request());

        lobbyService.getAll()
            .then(
                lobbies => dispatch(success(lobbies)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: lobbyConstants.GETALL_REQUEST } }
    function success(lobbies) { return { type: lobbyConstants.GETALL_SUCCESS, lobbies } }
    function failure(error) { return { type: lobbyConstants.GETALL_FAILURE, error } }
}

function create(lobby) {
    return dispatch => {
        dispatch(request(lobby));
        lobbyService.create(lobby)
            .then(
                lobby => {
                    dispatch(success(lobby));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(lobby) { return { type: lobbyConstants.CREATE_REQUEST, lobby } }
    function success(lobby) { return { type: lobbyConstants.CREATE_SUCCESS, lobby } }
    function failure(error) { return { type: lobbyConstants.CREATE_FAILURE, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        lobbyService._delete(id)
        .then(
            lobby => dispatch(success(id)),
            error => dispatch(failure(error))
        );
    };

    function request(id) { return { type: lobbyConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: lobbyConstants.DELETE_SUCCESS, id } }
    function failure(error) { return { type: lobbyConstants.DELETE_FAILURE, error } }
}