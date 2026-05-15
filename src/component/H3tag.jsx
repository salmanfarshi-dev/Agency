import React from 'react'

function H3tag({text,className}) {
  return (
     <h3 className={`font-semibold text-[35px] text-success font-inter ${className}`}>{text}</h3>
  )
}

export default H3tag