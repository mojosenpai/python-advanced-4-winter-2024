import React from 'react'
import { useParams } from 'react-router-dom'

function Dashboard() {
    let params = useParams()
    console.log(params)
  return (
    <div>
        <h3>Welcome back, {params.user}!</h3>
    </div>
  )
}

export default Dashboard