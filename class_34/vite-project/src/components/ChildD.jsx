

import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
// import { Usercontext } from '../context/UserContext'


function ChildD() {
      // const user = useContext(Usercontext)

      const data = useSelector((state) => state.counter.value)
    
  return (
    <>
   <h1>Child D</h1>
     {/* <p>{user}</p> */}


     <h2>{data}</h2>
    
    </>
  )
}

export default ChildD