import React from 'react'

function Listitem({text,className}) {
  return (
    <ul className='list-none'>
      <li className={`text-secondary text-sm md:text-[18px] font-normal font-inter cursor-pointer hover:text-primary duration-300 ${className}`}>{text}</li>
    </ul>
  )
}

export default Listitem