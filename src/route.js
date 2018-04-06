import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import React from 'react';
import {createLogger} from 'redux-logger';
import Reducers from './reducers/index'
const logger = createLogger();
import AppWithNavigationState from './navigator'

const store = createStore(
    Reducers,
    applyMiddleware(logger),
);

class R extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
      );
    }
}

AppRegistry.registerComponent('coindaily', () => R);