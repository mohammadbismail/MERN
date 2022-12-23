import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Chat from '../components/Chat'
import io from 'socket.io-client'
import Join from '../components/Join'
const Main = () => {
  const [socket] = useState(() => io(':8000'))
  const [text, setText] = useState("")
  const [textArr, setTextArr] = useState([])
  const [name, setName] = useState("")
  useEffect(() => {
    console.log("Hi")
    socket.on("chatting", message => setTextArr([...textArr, message])
    );
  })

  const txToServer = (e) => {
    e.preventDefault();
    socket.emit("chatting", `User ${name} sent: ${text}`)
  }

  return (
    <div>
      {name ? <Chat textArr={textArr} setTextArr={setTextArr} handleSubmitProp={txToServer} /> : <Join handleOnChangeProp={setName} />}
    </div>
  )
}

export default Main