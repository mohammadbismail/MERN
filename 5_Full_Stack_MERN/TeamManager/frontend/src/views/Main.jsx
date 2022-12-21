import React from 'react'
import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PlayerForm from '../components/PlayerForm'
import axios from 'axios'
import { useEffect } from 'react'
import PlayerList from '../components/PlayerList'
import PlayerStatus from './PlayerStatus'

const Main = () => {
    const [players, setPlayers] = useState([])
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players`)
            .then((res) => setPlayers(res.data), setLoaded(true))

    }, [])

    const createPlayer = (player) => {
        axios.post(`http://localhost:8000/api/player/`, player)
            .then(() => setPlayers([...players, player]))
            .then(() => navigate(`/`))
            .catch(err => {
                // console.log(err.response.data.err)
                // const errorValidator = err.response.data.err.message
                // setErrors(errorValidator);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);

            })
        setName("")
        setPosition("")
    }

    const deletePlayer = (deleteId) => {
        axios.delete(`http://localhost:8000/api/player/${deleteId}`)
            .then(setPlayers(players.filter((player) => deleteId !== player._id)))
    }

    const changeColor = () => {

    }

    return (
        <div>
            <Routes>
                <Route
                    path={`/add`}
                    element={<PlayerForm
                        name={name}
                        setName={setName}
                        position={position}
                        setPosition={setPosition}
                        onSubmitProp={createPlayer}
                        errors={errors}
                    />}
                />
                <Route
                    path={`/`} element={loaded && <PlayerList players={players} onClickProp={deletePlayer} />}
                />
                <Route path={`/player/:id`} element={<PlayerStatus players={players} onClickProp={changeColor} />} />
            </Routes>
        </div>
    )
}

export default Main