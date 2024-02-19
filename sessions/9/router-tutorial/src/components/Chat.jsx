import React from 'react'
import { useParams } from 'react-router-dom'

function Chat() {
    let {id} = useParams()
  return (
    <div>chat with user {id}</div>
  )
}

export default Chat