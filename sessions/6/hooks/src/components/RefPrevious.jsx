import React, { useRef, useState } from 'react'

function RefPrevious() {
    let [inputValue, setInputValue] = useState("")
    let [currentValue, setCurrentValue] = useState("")
    let previousValue = useRef("")

    let get_current_value = () => {
        setCurrentValue(inputValue)
    }

  return (
    <div>
        <input type='text' onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => {
            previousValue.current = currentValue
            get_current_value()
        }
            }>save</button>
        <p>{currentValue}</p>
        <p>{previousValue.current}</p> 
    </div>
  )
}

export default RefPrevious