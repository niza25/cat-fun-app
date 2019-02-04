import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import StartPage from './components/StartPage';
import './App.css';

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
