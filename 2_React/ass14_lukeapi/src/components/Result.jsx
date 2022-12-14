import React, { useEffect, useState } from 'react'
import Display from './Display'
import axios from "axios"

const Result = ({ type, id }) => {
    const [response, setResponse] = useState([])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then(res => setResponse(res.data))
    }, [id, type])
    return (
        <div>
            <Display response={response} type={type} />
        </div>
    )
}

export default Result