

// import React from 'react'
// import ChildC from './ChildC'

// function ChildB({data}) {
//   return (
//     <div>

//         <h1>Child B</h1>

//         <ChildC data={data}/>
      
//     </div>
//   )
// }

// export default ChildB;





import React from 'react'
import ChildC from './ChildC'
import { useSelector } from 'react-redux';

function ChildB() {
  const user = useSelector((state) => state.counter.value)
  return (
    <div>

        <h1>Child B</h1>

        <h2>{user}</h2>

        <ChildC />
      
    </div>
  )
}

export default ChildB;
