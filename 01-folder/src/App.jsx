// function App(){
//   // return "Hello Guys"
//   return <h1>Kaise Hain App Log!</h1>
// }

// export default App
import React from 'react'

const App = () => {
  return (
    <>
       <div id = "PARENT"> {/*(use of fragmentation) */}
      <h1 id = "child 1"> Hello </h1>
      <h2 id = "child 2">Hello</h2>
    </div>
    <div id = "PARENT"></div>
   
    </>
  )
}

export default App