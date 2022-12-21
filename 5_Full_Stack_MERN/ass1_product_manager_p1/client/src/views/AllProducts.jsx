import React from 'react'
import { Link } from 'react-router-dom'
const AllProducts = ({ products }) => {
    return (
        <div>
            <h1>All Products:</h1>
            {products.map((product, id) => {
                return <p key={id}>
                    <Link to={`/product/${product._id}`} >
                        {product.title}
                    </Link>
                </p>
            })}
        </div >
    )
}

export default AllProducts