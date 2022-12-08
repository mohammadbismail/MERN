import React,{useState} from 'react' 

const BigInversion = (props) => {
    const arr = useState(5);
  return (
    <div>
        <h1>{props.fname}{props.lname}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
    </div>
  )
}

export default BigInversion