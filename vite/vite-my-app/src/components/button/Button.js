import React from 'react'

export default function Button(props) {
  return (
      <button className="btn" style={{backgroundColor:'yellow'}}>{props.buttonText}</button>
  )
}
