import React, { useState } from 'react'
import FormElement from './FormElement';
import axios from 'axios'

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

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
                <FormElement type="text" label="Title" value={title} onChange={setTitle} />
                <FormElement type="number" label="Price" value={price} onChange={setPrice} />
                <FormElement type="text" label="Description" value={description} onChange={setDescription} />
                <FormElement type="submit" value="Create" />
            </form>
        </div>
    )
}

export default Form