import React from 'react'
import { Link } from 'react-router-dom'
import MultiButton from './MultiButton'

const PlayerList = (props) => {
    const { players, onClickProp } = props
    const handleDelete = (deleteId) => {
        onClickProp(deleteId);
    }
    return (
        <div>
            <p>
                <Link to={`/`}>
                    List
                </Link>
                |
                <Link to={`/add`}>
                    Add Player
                </Link>
            </p>
            {players.map((player, id) => {
                return (
                    <>
                        <table>
                            <thead>
                                <td>Team Name</td>
                                <td>Position</td>
                                <td>Action</td>
                            </thead>
                            <tbody>
                                <tr key={id}>
                                    <td>
                                        <Link to={`/player/${player._id}`}>
                                            {player.name}
                                        </Link>
                                    </td>
                                    <td>{player.position}</td>
                                    <td><MultiButton onClickProp={() => handleDelete(player._id)} label="Delete" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
            })}
        </div>
    )
}

export default PlayerList