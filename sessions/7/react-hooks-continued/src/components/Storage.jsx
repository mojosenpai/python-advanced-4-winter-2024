import React, { useState } from 'react'


function Storage() {
  const [name, setName] = useState("")
  const storage = window.localStorage
  return (
    <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={
            storage.setItem('name', name)
        }>Save</button>
        <p>{storage.getItem('name')}</p>
    </div>
  )
}

export default Storage