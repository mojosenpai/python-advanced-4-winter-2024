import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { UserContext } from './context'
import useStorage from './storage'

function App() {

  let [user, setUser] = useState("John")
  let [s, useS] = useStorage('a', 'hello')
  return (
    <div>
    <UserContext.Provider value={user}>
    <Header />
    </UserContext.Provider>
    
    </div>
  )
}

export default App
