import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import RideBooking from './pages/RideBooking'
import About from './pages/About'
import RideTracking from './pages/RideTracking'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/book-ride" element={<RideBooking />} />
          <Route path="/about" element={<About />} />
          <Route path="/track-ride" element={<RideTracking />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App