import * as React from 'react'

export default function ImgDisplay(props) {
  return (
    <div>
      <img src={props.imageUrl} alt='catImage' />
    </div>
  )
}