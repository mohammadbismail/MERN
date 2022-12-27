import { Box, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListsView = () => {
    const [notDone, setNotDone] = useState([])
    const [doing, setDoing] = useState([])
    const [done, setDone] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/notdone`)
            .then((res) => { setNotDone(res.data); setLoaded(true); console.log(res.data) })

    }, [])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/doing`)
            .then((res) => { setDoing(res.data); setLoaded(true); console.log(res.data) })

    }, [])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/done`)
            .then((res) => { setDone(res.data); setLoaded(true); console.log(res.data) })

    }, [])

    const updateToDoing = (id) => {
        axios.put(`http://localhost:8000/api/product/${id}`, { status: "doing" })
            .then(() => {
                const doingItem = notDone.filter((item) => item._id === id);
                console.log(doingItem)
                setNotDone(notDone.filter((item) => item._id !== id))
                setDoing([...doing, doingItem[0]])
            })


    }
    const updateToDone = (id) => {
        axios.put(`http://localhost:8000/api/product/${id}`, { status: "done" })
            .then(() => {
                const doneItem = doing.filter((item) => item._id === id)
                setDoing(doing.filter((item) => item._id !== id))
                setDone([...done, doneItem[0]])
            })
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(() => setDone(done.filter((item) => item._id !== id)))
    }
    return (
        <Box style={{ display: "flex", justifyContent: "space-around" }}>

            <div>
                {notDone.map((item, i) => {
                    return (
                        <p key={i}>{item.title} ,{item.price},{item.description} | <Button variant='outlined' color='primary' onClick={() => updateToDoing(item._id)}>Set to Doing</Button></p>
                    )
                })}
            </div >
            <div>
                {doing.map((item, i) => {
                    return (
                        <p key={i}>{item.title} ,{item.price},{item.description} | <Button variant='outlined' color='secondary' onClick={() => updateToDone(item._id)}>Set Done</Button></p>

                    )
                })}
            </div ><div>
                {done.map((item, i) => {
                    return (
                        <p key={i}>{item.title} ,{item.price},{item.description} | <Button variant='outlined' color='success' onClick={() => handleDelete(item._id)}>Delete</Button></p>
                    )
                })}
            </div >
        </Box>
    )
}

export default ListsView