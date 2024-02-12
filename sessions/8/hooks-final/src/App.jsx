import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { UserContext } from './context'
import useStorage from './storage'
import Reducer from './components/Reducer'

function App() {

  let [user, setUser] = useState("John")
  let [s, setS] = useStorage('a', 'hello')
  let [input, setInput] = useStorage('input', '')
  let [text, setText] = useState('')
  return (
    <div>
    {/* <UserContext.Provider value={user}>
    <Header />
    </UserContext.Provider> */}
    <input placeholder={input} type='text' value={text} onChange={e => setText(e.target.value)} />
    <br />
    <button onClick={() => setInput(text)}>save!</button>
    <Reducer />
    </div>
  )
}

export default App
