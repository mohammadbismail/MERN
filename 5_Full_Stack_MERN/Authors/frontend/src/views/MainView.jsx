
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Create from "./Create";
import Edit from "./Edit";
import React, { useState } from "react";
import axios from "axios";

const MainView = () => {
    const [authors, setAuthors] = useState([]);

    const handleDelete = (authIdFrmTable) => {
        axios.delete(`http://localhost:8000/api/authors/${authIdFrmTable}`)
            .then(setAuthors(authors.filter((auth) => auth._id !== authIdFrmTable)))
            .catch(err => console.error(err))
    }
    return (
        <div>
            <h1>Favorite authors</h1>
            <Routes>
                <Route
                    path={`/`}
                    element={<Main authors={authors} handleDelete={handleDelete} setAuthors={setAuthors} />} />
                <Route path={`/new`} element={<Create authors={authors} setAuthors={setAuthors} />} />
                <Route path={`/edit/:id`} element={<Edit authors={authors} setAuthors={setAuthors} />} />
            </Routes>
        </div>
    )
}

export default MainView