
import { createStore, applyMiddleware, combineReducers } from 'redux'
import Reducers from '../reducers/index'
import {createLogger} from 'redux-logger'
const logger = createLogger();

export default createStore(
    Reducers,
    applyMiddleware(logger),
);