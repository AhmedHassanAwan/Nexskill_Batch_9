


import React from 'react'
import ChildA from './components/ChildA'
import { Usercontext } from './context/UserContext'

function App() {

  let data = "hello react js"
  return (
    <div>

      <Usercontext.Provider value={data}>

      <h1>App</h1>
      <ChildA />
      
      </Usercontext.Provider>
    </div>
  )
}

export default App
