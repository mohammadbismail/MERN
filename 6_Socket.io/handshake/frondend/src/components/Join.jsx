import React from 'react'
import { useState } from 'react'

const Join = (props) => {
    const { handleOnChangeProp } = props
    const [userName, setUserName] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        handleOnChangeProp(userName)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Name' onChange={e => setUserName(e.target.value)} />
                <input type="submit" value="Join" />
            </form>
        </div>
    )
}

export default Join