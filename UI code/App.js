import React, { Component } from 'react';
 import {Provider} from 'react-redux';
import store from './store';
import Navbar from './Components/Navbar';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <Navbar/>
      </Provider>
    );
  }
}

export default App;