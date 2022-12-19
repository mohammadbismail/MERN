import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Form from '../components/Form'
import Details from './Details'

const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => {
                setProducts(res.data.products);
                console.log(res.data.products)
                setLoaded(true);
                console.log(`Data recieved and ${loaded}`)
            })
            .catch(err => console.error(err))
    }, [products])

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "5rem", flexDirection: "column" }}>
            <Form />
            {loaded && <Details products={products} />}
        </div>
    )
}

export default Main