
import {React , useState , useEffect  } from 'react'

function Effects() {

  const [counter , setcounter] = useState(0);

   function fun2(params) {
    console.log("fun 2");
  }

  useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))

    // console.log("component render !");

    // fun2()
    
    
  } , [] )

  function sayhi(params) {
    // console.log("hello say hi");
    
  }
  // sayhi()


  return (
<>


<h1>Effcts</h1>

<button onClick={() => setcounter(counter + 1)}> counter :  {counter}</button>
</>
  )
}

export default Effects

//  useEffect(fun , [] ) 
  