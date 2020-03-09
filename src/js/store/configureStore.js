import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const composeEnhancers = process.env.NODE_ENV === 'development' ? require('remote-redux-devtools').composeWithDevTools({ port: 9001 }) : compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}
