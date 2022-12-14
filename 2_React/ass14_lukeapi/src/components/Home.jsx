import React from 'react'
import Form from "./Form"
import { Router } from "@reach/router";
import Result from './Result';

const Home = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", }}>
            <Form />
            <Router>
                <Result path="/:type/:id" />
            </Router>
        </div>
    )
}
export default Home