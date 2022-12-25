import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const AllProducts = (props) => {
    const { products, onClickProp } = props
    return (
        <div>
            {products.map((prod, id) => {
                return (
                    <div>
                        <p key={id}><Link to={`/${prod._id}`} >{prod.title} </Link></p>
                        <DeleteButton onClickProp={() => onClickProp(prod._id)} />
                    </div>

                )
            })}
        </div>
    )
}

export default AllProducts
