import React from 'react'

const BigInversion = (props) => {
  return (
    <div>
        <h1>{props.fname}{props.lname}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
    </div>
  )
}

export default BigInversion