import React, { useState } from 'react'
import { navigate } from "@reach/router"

const Form = () => {
    const [id, setId] = useState(0);
    const [selectVal, setSelectVal] = useState("people");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${selectVal}/${id}`)
    }
    return (
        <div style={{ margin: "5rem 30rem", textAlign: "center", }}>
            <form onSubmit={handleSubmit}  >
                <label htmlFor="select">Search for: </label>
                <select onChange={(e) => setSelectVal(e.target.value)}>
                    <option name="select" value="people">People</option>
                    <option name="select" value="planets">Planets</option>
                </select>
                <label htmlFor="wantedId">ID: </label>
                <input type="text" name="wantedId" placeholder="Enter id" onChange={(e) => setId(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Form