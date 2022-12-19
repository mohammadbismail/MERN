import React from 'react'

const FormElement = ({ type, label, value, onChange }) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type={type} name={label} value={value} onChange={e => onChange(e.target.value)} style={{ margin: ".2rem"}} />
        </div>
    )
}

export default FormElement