

import React, { useState } from 'react'

function UseName() {
    const [name , setName] = useState("ali");


    const changeName = ()=>{
        setName("hassan")

    }
  return {
    name,
    changeName
  }
    
}

export default UseName