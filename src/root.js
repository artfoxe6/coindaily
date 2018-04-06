import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import React from 'react';
import Store from './store/index'
import AppWithNavigationState from './navigator'

class Root extends React.Component {
    render() {
      return (
        <Provider store={Store}>
          <AppWithNavigationState />
        </Provider>
      );
    }
}

AppRegistry.registerComponent('coindaily', () => Root);