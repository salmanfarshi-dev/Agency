import React from 'react'
import Subheading from '../component/Subheading'
import Pera from '../component/Pera'
import Cards from '../component/Cards'
import ReviewsCard from '../component/ReviewsCard'




function Reviews() {
  return (
   <section className='lg:pb-[96px] lg:px-20 px-4 mx-auto '>
    <Subheading text="Some Client Reviews"/>
    <Pera text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." className="text-center lg:w-[620px] text-sm w-full px-4 mx-auto mt-2"/>


<ReviewsCard/>
   

   </section>
  )
}

export default Reviews