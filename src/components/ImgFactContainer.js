import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomImage } from '../actions/getImage';
import { getFacts } from '../actions/getFacts';
import ImgDisplay from './ImgDisplay';
import FactDisplay from './FactDisplay';

class ImgFactContainer extends React.Component {

  componentDidMount() {
        this.props.getRandomImage()
        this.props.getFacts()
  }

  render() {
    return (
      <div>
      <ImgDisplay imageUrl = {this.props.state.image}/>
      <FactDisplay text = {this.props.state.facts} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return{
    state
  }
}

export default connect(mapStateToProps, { getRandomImage, getFacts })(ImgFactContainer)