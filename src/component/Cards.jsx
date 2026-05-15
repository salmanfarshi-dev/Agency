import React from 'react'
import Image from './Image';

function Cards({src,tittle,pera,height}) {
  return (
   <>
  
<div className='bg-indigo-300 items-center flex text-center flex-col w-[424px] px-[50px] rounded-[20px]'>
 <img className={`${height} object-fit-cover`} src={src} alt="" />
  <h4 className='font-bold font-inter text-[25px] text-success mt-[40px] mb-[20px]'>{tittle}</h4>
  <p>{pera}</p>

</div>


   </>
  )
}

export default Cards;