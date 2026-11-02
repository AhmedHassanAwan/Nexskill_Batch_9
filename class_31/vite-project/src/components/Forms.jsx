


import React, { useState } from 'react'

function Forms() {

   const [name , setName] =  useState("")
  return (
    <div> 

        <input type="text"  onChange={(e)=> setName(e.target.value) }  placeholder='enter any thing'  />

        <p>{name}</p>
      
    </div>
  )
}

export default Forms
