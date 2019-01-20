//React and React native import
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

//Components  and Elements local
import Route from './src/components/Route';
import reducers from './src/reducers/Index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Route />
      </Provider>
    );
  }
}
