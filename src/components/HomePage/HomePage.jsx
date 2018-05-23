import React, { Component } from 'react';

import { LobbyCreator } from './LobbyCreator';
import { LobbyLister } from './LobbyLister';

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                <LobbyCreator />
                <LobbyLister />
            </div>
        );
    }
}

export { HomePage };
