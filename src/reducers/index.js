
import { combineReducers } from 'redux';
import user from './user';
import nav from './nav';
import app from './app';

const Reducers = combineReducers({
    user,
    app,
    nav
});

export default Reducers