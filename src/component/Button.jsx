import React from 'react'

function Button({text, className}) {
  return (
      <button className={`bg-primary px-[20px] md:px-[42px] py-[5px] md:py-[15px] rounded-[10px] font-inter text-white md:text-xl font-semibold border border-transparent hover:text-primary hover:border-primary hover:bg-transparent duration-300 ${className}`}>{text}</button>
  )
}

export default Button