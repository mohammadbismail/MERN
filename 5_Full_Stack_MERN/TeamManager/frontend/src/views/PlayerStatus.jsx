import React from 'react'
import { useState } from 'react'
// import { useParams } from 'react-router-dom'
import MultiButton from '../components/MultiButton'

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
                                        <MultiButton label="Playing" onCLickProp={() => handleGreen} style={green ? greenColor : null} /> <MultiButton label="Not Playing" onCLickProp={() => handleRed} style={red ? redColor : null} /> <MultiButton label="Undesided" onCLickProp={() => handleYellow} style={yellow ? yellowColor : null} />
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