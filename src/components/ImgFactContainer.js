import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImage } from '../actions/getImage'
import request from 'superagent';

class ImgFactContainer extends React.Component {

  componentDidMount() {
    request('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        this.props.getImage(response.body[0]['url'])
      })
  }

  render() {
    return (
      <div>
        <img src = {this.props.state} alt = 'catImage'/>
      </div>
    )
  }

}


const mapStateToProps = state => {
  return{
    state
  }
}


export default connect(mapStateToProps, { getImage })(ImgFactContainer)