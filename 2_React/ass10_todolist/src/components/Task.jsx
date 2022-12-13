import React from 'react'

const Task = ({ id, item, handleDelete, handleComplete }) => {
    const checkedItem = {
        textDecoration: "line-through",
    }

    return (
        <div key={id} style={{ display: "flex", }}>
            <p style={item.isCompleted ? checkedItem : null} >{item.description}</p>
            <input type="checkbox" checked={item.isCompleted} onChange={() => handleComplete(id)} />
            <button onClick={(e) => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Task
