import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import myFirstReducer from './myFirstReducer';

export default combineReducers({
    routerReducer,
    myFirstReducer,
});
