

import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Features/Counter/CounterSlice';
// import { Usercontext } from '../context/UserContext'


function ChildD() {
      // const user = useContext(Usercontext)

      const data = useSelector((state) => state.counter.value);

      const dispatch = useDispatch();
    
  return (
    <>
   <h1>Child D</h1>
     {/* <p>{user}</p> */}


     <h2>{data}</h2>

     <button onClick={() => dispatch(increment())}>Increment</button>
     <button onClick={() => dispatch(decrement())}>Increment</button>

    
    </>
  )
}

export default ChildD