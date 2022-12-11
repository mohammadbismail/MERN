import React, { useState } from 'react'

const FormElement = (props) => {
const [fname,setFname] = useState("");
const [errorMsg, setErrorMsg] = useState("")
const handleInput = (e) => {
    setFname(e.target.value);
    if (e.target.value.length < 3 ){
        
    }
}
  return (
        <div>
            <p>{errorMsg}</p>
            <label>{props.label}</label>
            <input type={props.type} onChange={handleInput} value={fname}></input>
        </div>
    )
}

export default FormElement