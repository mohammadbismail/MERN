import React from 'react'

const DeleteButton = (props) => {
    const { onClickProp } = props
    return (
        <div>
            <button onClick={onClickProp}>Delete</button>
        </div>
    )
}

export default DeleteButton