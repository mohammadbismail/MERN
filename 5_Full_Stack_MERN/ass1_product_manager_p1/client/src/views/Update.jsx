import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data.product);
                console.log(res.data.product)
            })
    })
    
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

export default Update