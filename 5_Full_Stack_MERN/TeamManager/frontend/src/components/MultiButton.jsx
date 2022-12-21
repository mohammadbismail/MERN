import React from 'react'

const MultiButton = ({ onClickProp, label, style }) => {
    return (
        <div>
            <button onClick={onClickProp} style={style}>{label}</button>
        </div>
    )
}

export default MultiButton