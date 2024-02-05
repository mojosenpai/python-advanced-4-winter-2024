import React, { useCallback, useState } from 'react'
import List from './List'

function Callback() {
  const [num, setNum] = useState(0)
  const [isDark, setIsDark] = useState(false)
  const theme = {
    'backgroundColor': isDark? 'black': 'white',
    'color': isDark? 'white': 'black'
  }
  const getItems = useCallback(() => {
    return [num, num + 1, num + 2]
  }, [num])
  return (
    <div style={theme}>
        <input type='number' value={num} onChange={(e) => setNum(parseInt(e.target.value))} />
        <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
        <List getItems={getItems} />
    </div>
  )
}

export default Callback