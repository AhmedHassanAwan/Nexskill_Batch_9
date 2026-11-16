"use client"


import Image from 'next/image';
import React, { useState } from 'react'
import logo from "@/app/images/globe.svg"
function page() {
  const [counter , setcounter] = useState(0);
  return (
    <>
    <h1 className='text-red-500 bg-yellow-500 p-2 m-3 font-bold'>hello next js Application ! </h1>
    {/* <div>page</div> */}

    {counter}

    {/* <Image src="/file.svg" width={200} height={200}/> */}
    {/* <Image src={logo}width={200} height={200}/>  */} 

    {/* <Image src="/file.svg" width={100} height={100} alt='image'/> */}
    <Image src={logo} width={100} height={100} alt='image'/>




    </>
  )
}

export default page