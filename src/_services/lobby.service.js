import { authHeader } from '../_helpers';

export const lobbyService = {
    create,
    getAll,
    getById
};


function create(lobby) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lobby)
    };

    return fetch('/lobby', requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/lobby', requestOptions).then(handleResponse);
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