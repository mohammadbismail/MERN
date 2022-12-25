import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Details from './Details'
import Update from './Update'
import axios from 'axios'
const Main = () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product`)
            .then((res) => { setProducts(res.data); })
            .then(() => setLoaded(true))

    }, [])

    const createProduct = (product) => {
        axios.post(`http://localhost:8000/api/product`, product)
            .then(() => setProducts([...products, product]))
            .catch(err => {
                // console.log(err.response.data.err)
                // const errorValidator = err.response.data.err.message
                // setErrors(errorValidator);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);

            })
    }
    const deleteProduct = (deleteId) => {
        axios.delete(`http://localhost:8000/api/product/${deleteId}`)
            .then(() => setProducts(products.filter((prod) => deleteId !== prod._id)))
    }
    return (
        <div>
            <Routes>
                <Route path={`/`}
                    element={<Dashboard products={products} loaded={loaded} onSubmitProp={createProduct} onClickProp={deleteProduct} errors={errors} />}></Route>
                <Route path={`/:id`} element={<Details />}></Route>
                <Route path={`/:id/edit`} element={<Update />}></Route>
            </Routes>
        </div>
    )
}

export default Main