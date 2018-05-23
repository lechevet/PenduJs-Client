import * as SocketIO from 'socket.io-client';

const port = 4187;
const apiUrl = "http://hazarp.ddns.net:"+ port;

class ServerAPI {
    client = null;

    connect() {
        this.client = SocketIO.connect(apiUrl);
    }
    onGame(cb) {
        this.client.on('game', cb);
    }

    makeGuess(letter, cb) {
        this.client.emit(letter, cb);
    }
}

export { ServerAPI };