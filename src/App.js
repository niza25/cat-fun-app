import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import ImgFactContainer from './components/ImgFactContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <ImgFactContainer />
      </div>
      </Provider>
    );
  }
}

export default App;
