import React from 'react'

function RefSimple() {
    let renderCount = useRef(1)
    let [counter, setCounter] = useState(0)
  
  
    useEffect(() => {
      renderCount.current = renderCount.current + 1
    })
    return (
      <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>add</button>
        <p>This page has been rendered {renderCount.current} times.</p>
      </div>
    )
}

export default RefSimple