import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormElement from './FormElement'
import MultiButton from './MultiButton'

const FormComp = (props) => {
    const { initName, handleSubmitProp, errors } = props
    const navigate = useNavigate()
    const [name, setName] = useState(initName)
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitProp({ name })
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <FormElement type="text" placeholder="Name" value={name} onChangeProp={e => setName(e.target.value)} />
                <FormElement type="submit" value="Submit" />
                <MultiButton label="Cancel" onClickProp={() => navigate(`/`)} />
            </form>
            {/* {errors} */}
        </div >
    )
}

export default FormComp