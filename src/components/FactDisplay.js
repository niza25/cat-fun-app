import * as React from 'react'
import '../App.css';

export default function FactDisplay(props) {

  const rndNr = Math.floor(Math.random() * props.text.length);
  
  return (  
    <div className = "factDisplay" >
      <p>{props.text[rndNr].name} - But it's not the cat on the picture</p>
      <p> {props.text[rndNr].description}</p>
    </div>
  )
}