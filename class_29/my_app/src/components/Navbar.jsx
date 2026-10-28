

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
{/* 
    <a href="home">Home</a>
    <a href="./pages/Contact.jsx">Conatct </a>
    <a href="home">About</a>
    <a href="home">Home</a> */}


   <nav>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/contact-us">Contact</Link>
    </nav>


    </>
  )
}

export default Navbar
