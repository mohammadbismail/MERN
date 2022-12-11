import React from 'react'

export const BoxView = ({color}) => {
    const boxStyle = {
        background : color,
        padding: "5rem",
        borderRadius: "5px",
    };
    return (
        <div style={boxStyle}>
        </div>
    )
}
