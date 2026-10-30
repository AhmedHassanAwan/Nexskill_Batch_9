

import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router'
import Products from './pages/Product'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Productlist from './pages/Productlist'

function App() {
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contact/>}/>

      <Route path='/products/:id' element={<Productlist/>}/>


      


      <Route path='*' element={<NotFound/>}/>



    </Routes>
    
    </>

  )
}

export default App


// static router 
// dynamic router 
// use params
//use navigate