import React, { useContext } from 'react'
import { UserContext } from '../context'

function Profile() {
  let user = useContext(UserContext)
  return (
    <div>Edit {user}'s profile</div>
  )
}

export default Profile