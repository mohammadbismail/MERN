import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormComp from '../components/FormComp'

const Create = (props) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const createAuthor = (auhtorObj) => {
        axios.post(`http://localhost:8000/api/authors`, auhtorObj)
            .then(() => navigate(`/`))
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
    return (
        <div>
            <FormComp initName="" handleSubmitProp={createAuthor} errors={errors} />
        </div>
    )
}

export default Create