import * as SocketIO from 'socket.io-client';

const port = 4187;
const apiUrl = "http://localhost:"+ port;

class ServerAPI {
    client = null;

    connect(id) {
        this.client = SocketIO.connect(apiUrl);
        this.client.emit('room', id);
    }

    disconnect() {
        this.client.disconnect();
    }

    onGame(cb) {
        this.client.on('game', cb);
    }

    makeGuess(letter, cb) {
        this.client.emit(letter, cb);
    }

    restart(cb) {
        this.client.emit('start', cb);
    }
}

export { ServerAPI };
