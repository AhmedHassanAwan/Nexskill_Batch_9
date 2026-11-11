

// import React from 'react'

// function ChildC({data}) {
//   return (
//     <div>

//         <h1>Child C</h1>

//         <p>{data}</p>
      
//     </div>
//   )
// }

// export default ChildC






import React, { useContext } from 'react'
import { Usercontext } from '../context/UserContext'
import ChildD from './ChildD'

function ChildC() {

  const user = useContext(Usercontext)
  return (
    <div>
        <h1>Child C</h1>
        <ChildD/>

        {/* <p>{user}</p> */}
      
    </div>
  )
}

export default ChildC
