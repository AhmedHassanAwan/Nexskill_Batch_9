


import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (

    <>
    <div className='flex justify-center gap-5 font-bold text-red-500 '>


    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/dashboard">Dashboard</Link>
    <Link href="/dashboard/profile">Profile</Link>
    </div>

    </>
  )
}

export default Navbar