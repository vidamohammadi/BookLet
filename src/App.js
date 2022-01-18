import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Details from './components/Details/Details'
import Home from './containers/Home/Home'
import Login from './containers/Login/Login'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:root" element={<Details/>} />
      </Routes>
    </Router>
  )
}

export default App
