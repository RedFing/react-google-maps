import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import CustomMap from './components/CustomMap';
import Settings from './components/Settings';
import './App.css';

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="wrapper">
          <CustomMap
            isMarkerShown
          />
          <Settings />
        </div>
      </Provider>
    );
  }
}

export default App;
