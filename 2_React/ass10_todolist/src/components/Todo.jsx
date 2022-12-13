import React from 'react'
import { useState } from 'react'
import Task from './Task';

const Todo = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([
        {
            description: "task#1",
            isCompleted: false,
        },
        {
            description: "task#2",
            isCompleted: false,
        },
        {
            description: "task#3",
            isCompleted: false,
        },
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.length > 0) {
            setTasks([...tasks, { description: task, isCompleted: false },])
            setTask("");
        }
        return;
    }
    const handleDelete = (delIdx) => {
        // console.log(`item from list ${delIdx}`)
        
        setTasks(tasks.filter((task, index) => index !== delIdx));
    }
    const handleComplete = (idx) => {
        const updateTasks = tasks.map((task, id) => {
            if (id === idx) task.isCompleted = !task.isCompleted;
            return task;
        });
        setTasks(updateTasks);
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
                        <Task id={id} item={item} handleDelete={handleDelete} handleComplete={handleComplete}/>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Todo