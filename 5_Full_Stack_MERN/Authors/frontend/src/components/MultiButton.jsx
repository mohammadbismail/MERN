import React from 'react'

const MultiButton = ({ label, onClickProp }) => {
    return (
        <div>
            <button onClick={onClickProp}> {label}</button>
        </div>
    )
}

export default MultiButton