import * as React from 'react'

export default function FactDisplay(props) {
  
  return (  
    <div className = "factDisplay" >
      <p >{props.text[0].name} - But it's not the cat on the picture</p>
      <p> {props.text[0].description}</p>
      <button onClick = {props.clickhandler}>Next</button>
    </div>
  )
}