import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import FormComp from '../components/FormComp'

const Edit = () => {
    const { id } = useParams()
    const [nameToUpdate, setNameToUpdate] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                setNameToUpdate(res.data.name)
                setLoaded(true)
            })
            .catch(err => console.error(err))
    })

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(res => console.log(res))
            .then(() => navigate(`/`))
            .catch(err => {

                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);

            })
    }
    return (
        <div>
            <p>
                <Link to={`/`}>
                    Home
                </Link>
            </p>
            {loaded && <FormComp initName={nameToUpdate} handleSubmitProp={updateAuthor} errors={errors} />}
        </div>
    )
}

export default Edit