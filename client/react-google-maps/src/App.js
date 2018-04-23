import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
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

axios.defaults.baseURL = 'http://localhost:5000/';

export default App;
