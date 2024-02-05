import React, { useState } from 'react'

function AddTask({onAdd}) {

    let [title, setTitle] = useState('')
    let [date, setDate] = useState('')
    let [reminder, setReminder] = useState(false)

    let onSubmit = e => {
        e.preventDefault()
        if(!title) {
            alert("title can't be empty!")
            return
        }
        if(!date) {
            alert("data can't be empty!")
            return
        }
        onAdd({title, date, reminder})
        setTitle('')
        setDate('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit} >
        <div className='form-control'>
            <label>title</label>
            <input value={title} type='text' placeholder='Add Title' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Date</label>
            <input value={date} type='text' placeholder='Add Date' onChange={e => setDate(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox' checked={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
        </div>
            <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  )
}

export default AddTask