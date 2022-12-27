import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import MultiButton from '../components/MultiButton'
const Main = (props) => {
    const { authors, setAuthors, handleDelete } = props
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    const deleteAuthor = (DeleteId) => {
        handleDelete(DeleteId)
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then((res) => {
                setAuthors(res.data)
                setLoaded(true)
            })
    })

    return (
        <div>
            <p>
                <Link to={`/new`}>
                    Add an author
                </Link>
            </p>
            {loaded && authors.map((auth, id) => {
                return (
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Author Name</td>
                                <td>Actions Avaliable</td>
                            </tr>

                        </thead>
                        <tbody >
                            <tr key={id}>
                                <td>{auth._id}</td>
                                <td>{auth.name}</td>
                                <td>
                                    <MultiButton label="Edit" onClickProp={() => navigate(`/edit/${auth._id}`)} />
                                    <MultiButton label="Delete" onClickProp={() => deleteAuthor(auth._id)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                )
            })
            }
        </div>
    )
}

export default Main