import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ChooseChecklist from './pages/ChooseChecklist'
import Checklist from './pages/Checklist'

function App() {

  return (
    <main id="main">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/"/>
          <Route path="/choose-checklist/:type" element={<ChooseChecklist/>}/>
          <Route path="/choose-checklist/:type/:check" element={<Checklist/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
