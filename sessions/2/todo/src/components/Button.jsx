import React from 'react'

function Button({color, showForm, setShowForm}) {
  let text = showForm? 'Close': 'Add New Task'
  let background_color = showForm? 'red': 'green'
  return (
    <button className='btn' style={{backgroundColor: background_color}} onClick={() => setShowForm(!showForm)}>{text}</button>
  )
}

export default Button