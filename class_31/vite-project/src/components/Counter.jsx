


import React, { useState } from 'react'

function Counter() {

    // let counter = 0

    const [count , setCount] = useState(0);

    const [like , setlike] = useState(true);

    // function plus() {
    //     console.log("plus");
    //     // counter = counter + 1
    //     setCount(count + 1)
    // }


    // function minus(params) {
    //     setCount(count - 1)
        
    // }

    
  return (
    <>



    <h1>{like ? "🤍" : "🧡"}</h1>
    <h1>{like ? "please like this" : "you like this !"}</h1>

    <button onClick={()=> setlike(!like)}>{like  ?  "Like" : "Liked"}</button>

    {/* <h1>counter app</h1>



    <h1>counter : {count}</h1>

    <button onClick={()=> setCount(count + 1)}>+</button>
    <button onClick={minus}>-</button> */}

    
    </>
  )
}

export default Counter
