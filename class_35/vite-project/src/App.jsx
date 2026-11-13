


// import React, { useMemo, useState } from 'react'

// function App() {

//   const  [count ,setCount] = useState(0);


//   const total = useMemo(() => {
//     let sum = 0;

//     for (let i = 0; i < 1000000; i++) {
//       sum += i;
//     }
    
    
//     return sum;
//   }, []);
//   // console.log("expensive calculation...");
  
//   // return total

  
//   return (

//     // <div>App</div>
// <>
//     <h1>Use memo</h1>
//     <h2>Amount : {total}</h2>

//     <hr />

//     <h2>{count}</h2>
//     <button onClick={() => setCount(count + 1)}>+</button>
// </>
//   )

// }


// export default App





// import React, { useRef } from 'react'

// function App() {
//   const ref = useRef(null);
//   console.log(ref);

//   function btn() {
//     // console.log(ref.current);
//     // ref.current.focus()
//     ref.current.style.backgroundColor = "red"
    
//   }
  
//   return (

//     <>
//     <input type="text" ref={ref}  />
//     <button onClick={btn}>click me</button>
//     <div>App</div>
//     </>
//   )
// }

// export default App



import React, { useState } from 'react'
import UseName from './hocks/UseName';

function App() {
  // const [name , setName] = useState("ali");
  const {name , changeName} = UseName();

  // const btn = ()=>{
  //   setName("hassan")
  // }
  return (
    <>

    <h3>{name}</h3>

    <button onClick={()=> changeName()}>change name</button>


    {/* <h1>{name}</h1> */}

    {/* <button onClick={btn}>change Name</button> */}
    <div>App</div>
    </>
  )
}

export default App