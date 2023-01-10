import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <main id="main">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/"/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
