import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [submittedColor,setSubmittedColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getColor(submittedColor);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Color' onChange={(e)=>setSubmittedColor(e.target.value)}/>
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form