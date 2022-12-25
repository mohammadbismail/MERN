import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
// import { useParams } from 'react-router-dom'

const PlayerStatus = (props) => {
    // const { id } = useParams()
    const { players } = props
    const [red, setRed] = useState(false)
    const [green, setGreen] = useState(false)
    const [yellow, setYellow] = useState(true)

    const handleGreen = () => {
        setGreen(!green);
    }
    const handleRed = () => {
        setRed(!red)
    }
    const handleYellow = () => {
        setYellow(!yellow)
    }
    const redColor = {
        backgroundColor: "red",
        color: "white"
    }
    const greenColor = {
        backgroundColor: "green",
        color: "white"
    }
    const yellowColor = {
        backgroundColor: "yellow",
        color: "white"
    }
    return (
        <div>
            {players.map((player, id) => {
                return (
                    <>
                        <table>
                            <thead>
                                <td>Team Name</td>
                                <td>Action</td>
                            </thead>
                            <tbody>
                                <tr key={id}>
                                    <td>{player.name}</td>
                                    <td>
                                        <Button variant='outlined' onCLickProp={() => handleGreen} style={green ? greenColor : null} >Playing</Button>
                                        <Button ariant='outlined' onCLickProp={() => handleRed} style={red ? redColor : null} >Not Playing</Button>
                                        <Button ariant='outlined' onCLickProp={() => handleYellow} style={yellow ? yellowColor : null} >Undesided</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
            })}

        </div>
    )
}

export default PlayerStatus