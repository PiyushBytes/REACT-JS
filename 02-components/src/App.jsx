import React from 'react'
import card from "./components/card";

const App = () => {
  return (
    <div>
      <div className = "card">
        <h1>Piyush Dawn</h1>
        <p>A passionate learner exploring the world of web development, UI design, and modern JavaScript frameworks.</p>
      </div>
      {card()}


    </div>

  )
}

export default App