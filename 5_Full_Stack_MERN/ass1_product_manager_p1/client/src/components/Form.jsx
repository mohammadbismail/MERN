import React, { useState } from 'react'
import FormElement from './FormElement';
import axios from 'axios'

const Form = ({ initTitle, initPrice, initDescription, button }) => {
    const [title, setTitle] = useState(initTitle);
    const [price, setPrice] = useState(initPrice);
    const [description, setDescription] = useState(initDescription);

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/products`, {
            title: title,
            price: price,
            description: description,
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setTitle("");
        setPrice("");
        setDescription("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <FormElement type="text" label="Title" value={initTitle} onChange={setTitle} />
                <FormElement type="number" label="Price" value={initPrice} onChange={setPrice} />
                <FormElement type="text" label="Description" value={initDescription} onChange={setDescription} />
                <FormElement type="submit" value={button} />
            </form>
        </div>
    )
}

export default Form

