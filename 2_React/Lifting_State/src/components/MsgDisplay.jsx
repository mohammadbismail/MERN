import React from 'react'

const MsgDisplay = (props) => {

  return (
    <>
    <h1>Current Msg</h1>
    <pre>{props.message}</pre>
    </>
  )
}

export default MsgDisplay