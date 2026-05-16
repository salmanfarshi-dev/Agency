import React from 'react'

function Span({ text , className }) {
  return (
    <span className={`text-secondary text-[8px] lg:text-xl font-inter hover:text-primary duration-300 cursor-pointer ${className}`}>{text}</span>
  )
}

export default Span