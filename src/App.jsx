import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './Index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
