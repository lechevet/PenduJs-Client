import { lobbyConstants } from '../_constants';
import { lobbyService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const lobbyActions = {
    create,
    getAll,
};


function create(lobby) {
    return dispatch => {
        dispatch(request(lobby));
        lobbyService.create(lobby)
            .then(
                lobby => { 
                    dispatch(success());
                    dispatch(alertActions.success('Lobby creation successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(lobby) { return { type: lobbyConstants.CREATE_REQUEST, lobby } }
    function success(lobby) { return { type: lobbyConstants.CREATE_SUCCESS, lobby } }
    function failure(error) { return { type: lobbyConstants.REGISTER_FAILURE, error } }
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

