import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import card from './components/card'

const App = () => {
  return (
    <div>
      <Navbar />
      {card()}
    </div>
  )
}

export default App