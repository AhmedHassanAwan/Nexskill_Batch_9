
import React from 'react'
import {useState} from "react"
function App() {
  const  [todo , setTodo] = useState("");
  const  [data , setData] = useState([]);


  function add() {
    setData([...data , todo]);
    console.log(todo);
    setTodo("");
  }

  function deletebtn(index) {
    // console.log("index ===>"  , index);

    let newarr = [...data]
    newarr.splice(index , 1)
    setData(newarr)
  }

  function editbtn(index) {
    // console.log(index);
    const update = prompt("Enter updata data")
    if (update === " "  || update === null ) {
      return;
    }
    const newdata =  data.map((items , i)=> 
      index === i ? update : items
    ) 
    setData(newdata)
    
  }
  return (
   <>

   <h1>Todo App</h1>
<button>-</button>
<h1>0</h1>
   <button>+</button> <br />



   <input type="text" value={todo} placeholder="Enter Todos" onChange={(e) => setTodo(e.target.value)}  />
   <button onClick={add}>Add Tdod</button>


   <ul>
    {data.map((items , index)=>(
      <div key={index}>

      <li>
        {items} <button onClick={() => editbtn(index)} >Edit</button> <button onClick={() => deletebtn(index)}>delete</button>
      </li>
      </div>
    ))}
   </ul>

   </>
  )
}

export default App