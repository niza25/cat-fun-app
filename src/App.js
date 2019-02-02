import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import ImgFactContainer from './components/ImgFactContainer'
import StartPage from './components/StartPage';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <StartPage />
      </div>
      </Provider>
    );
  }
}

export default App;
