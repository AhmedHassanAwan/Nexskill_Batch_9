

import React from 'react'
import { Spinner } from "@/components/ui/spinner"


function loading() {
  return (
    <div>

        {/* <h1>loading....</h1> */}

        <Spinner className="size-20" />
      
    </div>
  )
}

export default loading;