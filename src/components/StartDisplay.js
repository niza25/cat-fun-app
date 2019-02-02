import * as React from 'react'

export default function StartDisplay (props) {
  return (
      <div className="startPage">
      <h1>Wanna have some Cat Fun Fact?</h1>
      <p>here will be a pic of a cat</p>
      <button onClick={props.clickHandler}>Let's start</button>
    </div>
  )
}