import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([
        {
            description: "initial value",
            isCompleted: false,
        },
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, { description: task, isCompleted: false },])
        setTask("");
    }
    const handleDelete = (delIdx) => {
        console.log(`item from list ${delIdx}`)
        setTasks(tasks.filter((task, index) => index !== delIdx));
    }
    const handleComplete = (idx) => {
        const updateTasks = tasks.map((task, id) => {
            if (id === idx) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        });
        setTasks(updateTasks);
    }
    const checkedItem = {
        textDecoration: "line-through",
    }

    return (
        <div style={{ textAlign: "center", }}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" value={task} placeholder='Enter task description' onChange={(e) => setTask(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
            <hr />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                {tasks.map((item, id) => {
                    return (
                        <div key={id} style={{ display: "flex", }}>
                            <p style={item.isCompleted ? checkedItem : null} >{item.description}</p>
                            <input type="checkbox" checked={item.isCompleted} onChange={(e) => handleComplete(id)} />
                            <button onClick={() => handleDelete(id)}>Delete</button>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Todo