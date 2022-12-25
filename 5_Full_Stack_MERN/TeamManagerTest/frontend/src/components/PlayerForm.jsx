import { Button, Grid, ListItem, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const PlayerForm = (props) => {
    const { name, setName, position, setPosition, onSubmitProp, errors } = props
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitProp({ name, position })
    }
    return (
        <Box >
            <Box sx={{ display: "flex", alignItem: "center", justifyContent: "center" }}>

                <Button
                    variant='outlined'
                    color="success"
                >
                    <Link to={`/`}>
                        List
                    </Link></Button>

                <Button
                    variant="outlined"
                    color="success"
                    sx={{ color: "red" }}
                >
                    <Link to={`/add`}
                    >Add Player</Link>
                </Button>
            </Box>
            {errors.map((err, id) => <p style={{ color: "red" }} key={id}>{err}</p>)}

            <Stack
                direction="column"
                spacing={2}
            >
                <Typography
                    variant='h6'
                    component='h2'
                    gutterBottom
                    color='textPrimary'
                    margin='1rem 0'
                >
                    Create A Player
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Player Name"
                        variant='outlined'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Position"
                        variant='outlined'
                        value={position}
                        onChange={(e) => { setPosition(e.target.value) }}
                    />
                    <Button
                        type="submit"
                        id="outlined"
                        label="Position"
                        variant='outlined'
                        color='success'
                        size="large "
                    >Add</Button>
                </form>
            </Stack>
        </Box>
    )
}

export default PlayerForm