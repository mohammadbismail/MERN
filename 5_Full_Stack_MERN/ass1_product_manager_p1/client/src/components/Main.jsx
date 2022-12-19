import React from 'react'
import Form from './Form'
import { Routes, Route } from 'react-router-dom'
const Main = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "5rem" }}>
            <Form />
            <Routes>
                <Route />
            </Routes>
        </div>
    )
}

export default Main