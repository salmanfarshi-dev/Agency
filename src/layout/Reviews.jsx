import React from 'react'
import Subheading from '../component/Subheading'
import Pera from '../component/Pera'


function Reviews() {
  return (
   <section className='lg:pb-[96px]'>
    <Subheading text="Some Client Reviews"/>
    <Pera text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." className="text-center lg:w-[620px] text-sm w-full px-4 mx-auto mt-2"/>

   </section>
  )
}

export default Reviews