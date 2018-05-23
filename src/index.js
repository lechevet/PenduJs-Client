import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/App';
import { store } from './redux';

import './index.css';

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
