
import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/about'
import Contact from './pages/Contact'

function App() {
  // let islogin = false

  // if(islogin){
  //   alert("welcome")
  //   return (
  //     <><h1>Welcome to our website</h1></>
  //   )
  // } else{
  //   return (
  //     <>
  //     <h1>Please login</h1>
  //     </>
  //   )
  // }


  // let age = 5;


  // const people = [{
  //   id: 0,
  //   name: 'Creola Katherine Johnson',
  //   profession: 'mathematician',
  // }, {
  //   id: 1,
  //   name: 'Mario José Molina-Pasquel Henríquez',
  //   profession: 'chemist',
  // }, {
  //   id: 2,
  //   name: 'Mohammad Abdus Salam',
  //   profession: 'physicist',
  // }, {
  //   id: 3,
  //   name: 'Percy Lavon Julian',
  //   profession: 'chemist',
  // }, {
  //   id: 4,
  //   name: 'Subrahmanyan Chandrasekhar',
  //   profession: 'astrophysicist',
  // }];


//   const users = [
//   { id: 1, name: "Ali", age: 2 },
//   { id: 2, name: "Ahmed", age: 2 },
//   { id: 3, name: "Sara", age: 1 },
//   { id: 4, name: "Ayesha", age: 21 },
//   { id: 5, name: "Usman", age: 25 },
//   { id: 6, name: "Fatima", age: 23 },
//   { id: 7, name: "Hassan", age: 18 },
//   { id: 8, name: "Zain", age: 24 },
//   { id: 9, name: "Hina", age: 20 },
//   { id: 10, name: "Bilal", age: 26 }
// ];


// const products = [
//   { id: 1, name: "Laptop", price: 75000 },
//   { id: 2, name: "Mobile Phone", price: 45000 },
//   { id: 3, name: "Headphones", price: 2500 },
//   { id: 4, name: "Keyboard", price: 3500 },
//   { id: 5, name: "Smart Watch", price: 8000 }
// ];


  return (
    <>

    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<About/>}/>
      <Route path="/contact-us" element={<Contact/>}/>


    </Routes>

    {/* {products.length > 0 ? products.map((items)=>(
      <div key={items.id}>
      <>
      <h1>{items.name}</h1>
      <h1>{items.price}</h1>
      </>
      </div>
    )) : <h1>data not found </h1> } */}

    {/* {users.map((items , index)=>(
      items.age >=18 ? <div key={index}>
        <h1>{items.id}</h1>
        <h1>{items.name}</h1>
        <h1>{items.age}</h1>
      </div> : null
    ))} */}


    {/* {people.map((items , index)=>(
      
      <div key={index}>

      <h1>{items.name}</h1>
      <h1>{items.profession}</h1>
      </div>
      

    ))} */}

      {/* {age >= 18  ? <h1>your are adult </h1> : <h1>you are children</h1>} */}
      {/* {islogin ? <h1>welcom to our webstie</h1> : <p>Login please</p>} */}
    </>
  )

  // condition ? restult_true : result_false


  // return (

  //   <>
  //   {/* <Card name="ali" age={20}/> */}
  //   {/* <h1>hellow js</h1> */}
  //   {/* <Card name="ali" age={20}/>
  //   <Card name="hassan"  age={25}/>


  //   <h1>hello react js</h1>

  //   <Card name="usman" age={25}/> */}
  //   </>
  // )
}

export default App
