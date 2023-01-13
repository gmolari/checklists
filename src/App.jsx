import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useCookies } from 'react-cookie'

function App() {
  const [cookies, setCookies] = useCookies(['type', 'check'])

  return (
    <main id="main">
      <Router>
        <Routes>
          <Route path="/" element={<Home cookies={cookies} setCookies={setCookies}/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
