import React from 'react'

function Subheading({text,className}) {
  return (
   
 <h2 className={`text-success font-inter font-bold lg:text-[45px] text-center capitalize ${className}`}>{text}</h2>
  )
}

export default Subheading