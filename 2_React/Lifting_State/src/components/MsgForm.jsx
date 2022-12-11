import React from 'react'
import { useState } from 'react'

const MsgForm = (props) => {
    const [msg, setMsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Set Message</h1>
            <textarea cols="50" rows="4"
                placeholder='Enter your message here'
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
            ></textarea>
            <div>
                <input type="submit" value="Send Message" />
            </div>
            <hr />
        </form>
    )
}

export default MsgForm