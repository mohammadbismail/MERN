import React from 'react'

export const BoxView = (props) => {
    const boxColor ={
        backgroundColor : props.color,
    };
    return (
        <div className="boxColor" style={boxColor}>
        </div>
    )
}
