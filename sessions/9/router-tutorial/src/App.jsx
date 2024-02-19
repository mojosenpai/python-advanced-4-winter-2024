import { Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Pricing from "./components/Pricing"
import NotFound from "./components/NotFound"
import Dashboard from "./components/Dashboard"
import Messages from "./components/Messages"
import Chat from "./components/Chat"


function App() {

  return (
    <>
    <Link to="/">Home</Link>
    <br />
    <Link to="/about">About</Link>
    <br />
    <Link to="/pricing">Pricing</Link>
    <br />
    <Link to="/messages">Messages</Link>
    <br />
    <a href="https://github.com">Github</a>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/user/:user" element={<Dashboard />} />
      <Route path="/messages/*" element={<Messages />}>
        <Route path=":id" element={<Chat />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}



export default App
