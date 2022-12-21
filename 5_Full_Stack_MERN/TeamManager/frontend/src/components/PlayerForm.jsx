import React from 'react'

const PlayerForm = (props) => {
    const { name, setName, position, setPosition, onSubmitProp, errors } = props


    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitProp({ name, position })
    }
    return (
        <div>
            {errors.map((err, id) => <p style={{ color: "red" }} key={id}>{err}</p>)}
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Player Name</label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    <label >Position</label>
                    <input type="text" value={position} onChange={(e) => { setPosition(e.target.value) }} />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default PlayerForm