

import React from 'react'

function Button({title , color}) {
  return (
    

    <button style={{backgroundColor: color }}>
        {title}
    </button>
  )
}

export default Button