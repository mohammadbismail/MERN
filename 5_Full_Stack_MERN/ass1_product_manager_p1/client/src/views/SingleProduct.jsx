import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const SingleProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data.product)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3>
        </div>
    )
}

export default SingleProduct