import React from 'react'
import { useState } from 'react'

const Form = ({updateParentArr,colorArray}) => {
    const [color,setColor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        updateParentArr([
            ...colorArray,
            color])}
    
    return (
        <form onSubmit={handleSubmit}>
            <input className="form-input" type="text" placeholder='Box color' onChange={(e) => setColor(e.target.value) }/>
            <input className="form-input" type="submit" value="Add Box" />
        </form>
    )
}

export default Form