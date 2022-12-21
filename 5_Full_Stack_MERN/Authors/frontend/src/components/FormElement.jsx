import React from 'react'

const FormElement = ({ type, value, placeholder, onChangeProp }) => {
    return (
        <div>
            <input type={type} value={value} placeholder={placeholder} onChange={onChangeProp} />
        </div>
    )
}

export default FormElement