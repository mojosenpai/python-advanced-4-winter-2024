import React, { useContext } from 'react'
import { UserContext } from '../context'

function Welcome() {
  let user = useContext(UserContext)
  return (
    <div>Welcome back, {user}!</div>
  )
}

export default Welcome