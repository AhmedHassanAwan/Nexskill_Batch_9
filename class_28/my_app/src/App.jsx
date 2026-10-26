// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// // import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <h1>hello react js</h1>
//     </>
//   )
// }

// export default App




import abc from "../src/assets/images/image.png"
import Button from "./components/Button";
import Card from "./components/card";
import Footer from "./components/footer";
import Nav from "./components/Nav";


export default function App(){
  // console.log("hellow react js");

  // let name = "ali";
  // let age = 21;
  // let city = "karachi"
  
  return(
    <>

    <Button title={"Login"} color={"green"}/> <br /><br />
    <Button title={"Logout"} color={"red"}/> <br /><br />

    <Button title={"Sign in"} color={"pink"}/> <br /><br />
    <Button title={"Add to Card"} color={"blue"}/> 







    {/* <Card name="ali" age={21}/>
    <Card name="hassan" age={22}/>
    <Card name="hussain" age={20}/>
    <Card name="usman" age={25}/> */}



    {/* <h1>hello js</h1> */}

{/* 
    <Nav/>
    <h1>hello react js</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque repellat aspernatur asperiores facilis nisi recusandae doloribus, reiciendis voluptatum voluptas.</p>

    <Nav/>
    <Footer/> */}
    

    {/* <h1>hello react js</h1>

    <h1>Name:{name}</h1>
    <h1>Age : {age}</h1>
    <h1>City : {city}</h1>

    <img src={abc}alt="" /> */}
    {/* <img src="./images/image.png" alt="" /> */}

 

    
    </>
    

   
  )
}