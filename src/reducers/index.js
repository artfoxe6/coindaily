
import { combineReducers } from 'redux';
import user from './user';
import nav from './nav';
import player from './player';

const Reducers = combineReducers({
    user,
    nav,
    player
});

export default Reducers