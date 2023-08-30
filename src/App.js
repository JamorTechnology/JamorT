import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App