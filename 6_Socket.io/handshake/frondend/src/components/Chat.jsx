import React from 'react'
import { useState } from 'react'

const Chat = (props) => {
    const { textArr, setTextArr, handleSubmitProp, handleOnChangeProp } = props
    const [message, setMessage] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        handleSubmitProp(message);
    }
    return (
        <div>
            {textArr.map((tx, i) => <p key={i}>{tx}</p>)}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your message' onChange={e => setMessage(e.target.value)} />
                <input type="submit" value="Send Msg" />
            </form>
        </div>
    )
}

export default Chat