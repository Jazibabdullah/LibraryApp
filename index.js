import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './App/Redux/Store/Store';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
const Reduxstore = () => (
  <Provider store={configureStore}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => Reduxstore);
