import * as React from 'react'
import '../App.css';

export default function ImgDisplay(props) {
  return (
    <div>
      <img className = 'catImg'
      src={props.imageUrl}
      alt='catImage'
       />
       <button onClick = {props.onclick}>Next</button>
    </div>
  )
}