import React from 'react'

function Pera({text,className}) {
  return (
    <p className={`text-secondary text-xs font-inter leading-[26px] font-normal ${className}`}>{text}</p>
  )
}

export default Pera;