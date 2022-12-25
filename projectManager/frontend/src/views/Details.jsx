import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
  const [product, setProduct] = useState("")
  const [loaded, setLoaded] = useState(false)
  const { id } = useParams()
  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id)
      .then((res) => setProduct(res.data))
      .then(() => setLoaded(true))

  }, [])
  return (
    <div>
      {loaded ?
        <>
          < h1 > {product.title}</ h1 >
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p><Link to={`/${id}/edit`}>Edit</Link></p>
        </>
        : null
      }
    </div >
  )
}

export default Details