import { authHeader } from '../helpers';

export const lobbyService = {
    getAll,
    create,
    _delete
};

const port = 4187;
const apiUrl = "http://hazarp.ddns.net:"+ port +"/api/1.0";

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(apiUrl + '/lobby/getAllLobbies', requestOptions).then(handleResponse);
}

function create(lobby) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ name: lobby.name })
    };
    console.log(requestOptions);
    return fetch(apiUrl + '/lobby/createLobby', requestOptions).then(handleResponse);
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {...authHeader(), 'Accept': 'application/json' }
    };

    return fetch(apiUrl + '/lobby/delete/' + id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}
