import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import { AppContainer } from 'react-hot-loader';

const render = () => {
    ReactDOM.render(
        // Wrap App inside AppContainer
        <AppContainer>
        <App />
        </AppContainer>,
        document.getElementById('root')
    );
};
serviceWorker.register();
render();

if (module.hot) {
    module.hot.accept('./App', () => {
        render();
    });
}