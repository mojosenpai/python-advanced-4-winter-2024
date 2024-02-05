import React from 'react'
import Button from './Button'

function Header({text, color, showForm, setShowForm}) {
  return (
    <header className='header'>
        <h1>{text}</h1>
        <Button color={color} showForm={showForm} setShowForm={setShowForm} />
    </header>
  )
}

export default Header