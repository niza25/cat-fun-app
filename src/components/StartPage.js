import React, { Component } from 'react'
import ImgFactContainer from './ImgFactContainer';


export default class StartPage extends React.Component {

  onClickHandler = () => {
    return (
      <ImgFactContainer />
    )
  }

  render() {

    return (
      <div>
        <div className="startPageHeader">
          <h1>Wanna have some Cat Fun Fuct?</h1>
          <p>here will be a pic of a cat</p>
          <button onClick={this.onClickHandler}>Let's start</button>
        </div>
      </div>

    )
  }
}