import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import getRoutes from './routes';

const history = createHistory();
const store = configureStore(window.INITIAL_STATE, history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} children={getRoutes(store)} />
    </Provider>,
    document.getElementById('root')
)
