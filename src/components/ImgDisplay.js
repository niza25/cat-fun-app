import * as React from 'react'

export default function ImgDisplay(props) {
  return (
    <div>
      <img src={props.imageUrl}
      alt='catImage'
       />
       <button onClick = {props.onclick}>Next</button>
    </div>
  )
}