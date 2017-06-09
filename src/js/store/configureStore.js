import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

export default function configureStore(initialState, history) {
    const router = routerMiddleware(history);
    const composeEnhancers = process.env.NODE_ENV === 'development' ? require('remote-redux-devtools').composeWithDevTools({ port: 9001 }) : compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, router))
    );

    return store;
}
