import React from 'react'
import { Link } from 'react-router-dom'
import { TableContainer, Button, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth:"5rem", marginTop:"3rem" }} size="small" >
                    <TableHead>
                        <TableRow>
                            <TableCell >Team Name</TableCell>
                            <TableCell >Position</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {players.map((player, id) => {
                            return (
                                <TableRow key={id}>
                                    <TableCell >
                                        <Link to={`/player/${player._id}`}>
                                            {player.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell >{player.position}</TableCell>
                                    <TableCell >
                                        <Button variant='outlined' color='secondary' onClick={() => handleDelete(player._id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}

export default PlayerList