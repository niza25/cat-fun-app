import React, { Component } from 'react'
import ImgFactContainer from './ImgFactContainer';
import StartDisplay from './StartDisplay'


export default class StartPage extends React.Component {

  state = {
    startGame: false
  }

  onClickHandler = () => {
    const doesStart = this.state.startGame;
    this.setState({ startGame: !doesStart })
  }

  render() {

    return (
      <div>
          {
          !this.state.startGame ? <StartDisplay clickHandler = {this.onClickHandler} /> : <ImgFactContainer />
          }
      </div>

    )
  }
}