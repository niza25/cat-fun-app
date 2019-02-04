import React from 'react';
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

  displayRandomCat = () => {
    this.props.getRandomImage()
  }

  render() {
    if (!this.props.state.image) return 'Wait for it...'
    return (
      <div>
      <ImgDisplay
      imageUrl = {this.props.state.image}
      onclick = {this.displayRandomCat}
      />
      <FactDisplay
      text = {this.props.state.facts}
      />
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