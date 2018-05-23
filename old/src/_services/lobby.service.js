import { authHeader } from '../_helpers';

export const lobbyService = {
    create,
    getAll,
    getById
};

const port = 4187;
const apiUrl = "http://localhost:"+ port +"/api/1.0";

function create(lobby) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify({ name: lobby.name })
    };
    console.log(requestOptions);
    return fetch(apiUrl + '/lobby/createLobby', requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(apiUrl + '/lobby/getAllLobbies', requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/lobby/' + id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}