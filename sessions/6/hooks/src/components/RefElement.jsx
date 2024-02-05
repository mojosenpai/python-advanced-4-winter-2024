import React, { useRef } from 'react'

function RefElement() {
    let focusElement = useRef()
    let focus = () => {
        focusElement.current.focus()
    }

  return (
    <div>
        <input type='text' ref={focusElement} />
        <button onClick={focus}>focus!</button>
    </div>
  )
}

export default RefElement