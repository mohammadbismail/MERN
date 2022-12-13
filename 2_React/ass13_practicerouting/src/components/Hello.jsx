import React from 'react'
import { Link } from '@reach/router'

const Hello = ({ str }) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>The word is {str}</h1>
        </div>
    )
}

export default Hello