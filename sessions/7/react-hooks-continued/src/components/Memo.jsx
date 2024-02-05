import React, { useEffect, useMemo, useState } from 'react'

function Memo() {
  const [num, setNum] = useState(0)
  const [isDark, setIsDark] = useState(false)
  const double = x => {
    for(let i = 0; i <1000000000; i++) {

    }
    return x * 2
  }
  const doubledNumber = useMemo(() => double(num), [num])
  const theme = useMemo(() => { return {
    'backgroundColor': isDark? 'black': 'white',
    'color': isDark? 'white': 'black'
  }}, [isDark])

  useEffect(() => {
    console.log("theme changed")
  }, [theme])
  
  return (
    <div style={theme}>
        <input type='number' onChange={e => setNum(parseInt(e.target.value))} />
        <p>{doubledNumber}</p>
        <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
    </div>
  )
}

export default Memo