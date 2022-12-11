import React, { useState } from 'react'

const Display = ({ items }) => {
    const [desc, setDesc] = useState("");
    const mainbox = {
        display: "flex",
        flexDirection: "column",
        margin: "0 20%",
    }
    const tabs = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: "5px",
    }
    const description = {
        border: "2px green solid",
        padding: "1rem",
        textAlign: "center",
        minHeight: "10rem",
        borderRadius: "5px",
        fontSize: " 3rem",
    }
    const signleTab = {
        padding: "1rem",
        borderRadius: "5px",
        shadowColor: "grey",
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        backgroundColor: 'grey',
    }
    return (
        <div style={mainbox}>
            <div style={tabs}>
                {items.map((item, id) => <h1 style={signleTab} key={id} onClick={(e) => setDesc(item.desc)}>{item.title}</h1>)}
            </div>
            <div style={description}>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Display