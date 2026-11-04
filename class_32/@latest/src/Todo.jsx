

import {React , useState} from 'react'

function Todo() {
  const [todo , setTodo] =  useState("");
  const [data  , setData] = useState([])

  function addtodo() {
    // console.log(todo);
    // setData(todo)

    setData([...data , todo])

    setTodo("")
    
  }
  return (
    <>

    <h1>Todo App</h1>

    <input type="text" placeholder="enter any todos" value={todo} onChange={(e) => setTodo(e.target.value)} /> 
    <button onClick={addtodo}>Add todo</button>


    <ul>
      {data.map((items , index)=>
      <div key={index}>

       <li>{items}  <button>edit</button> <button>delete</button>  </li>
      </div>
      )}
    </ul>






    </>

  )}

export default Todo