import React from 'react'
import Conversation from './Conversation'
import { Outlet, Route, Routes } from 'react-router-dom'
import Chat from './Chat'

function Messages() {
  return (
    <div>
        <Conversation />
        <Outlet />
    </div>
  )
}

export default Messages