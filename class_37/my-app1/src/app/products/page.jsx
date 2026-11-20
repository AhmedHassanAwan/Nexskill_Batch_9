

import React from 'react'

async function page() {

    const data =   await fetch("https://jsonplaceholder.typicode.com/users");
    const res =  await data.json();
    console.log(res);
    
  return (
        <>
    <div>


        <h1>Products Pages </h1>



        {res.map((items)=>(
            <div key={items.id}>

            <h1>{items.name}</h1>
            </div>
        ))}
      
    </div>
        </>
  )
}

export default page
