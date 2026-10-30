

import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <>
    <nav>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/about-us">about</a></li>
        <li><a href="/contact">Conatct</a></li>
        <li><a href="/products">Product</a></li> */}


        <Link style={{margin:10 , padding:10}} to={'/'}>Home</Link>
        <Link style={{margin:10 , padding:10}} to={'/about-us'}>About</Link>
        <Link style={{margin:10 , padding:10}} to={'/products'}>Products</Link>
        <Link style={{margin:10 , padding:10}} to={'/contact'}>Contact</Link>



    </nav>
    </>
  )
}

export default Navbar
