import React from 'react'
import Image from '../component/Image'
import Invited from '../assets/Vector.png'
import Pera from './Pera'
import { FaStar } from "react-icons/fa6"
import ClientReview from './ClientReview'
import ClientImageone from '../assets/clientone (1).png'
import ClientImagetwo from '../assets/clientone (2).png'
import ClientImagethree from '../assets/clientone (3).png'


function ReviewsCard() {
  return (
    <>
    
    <div className="lg:mt-20 mb-10 mt-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-20 gap-y-10  items-center">

        <div className='bg-white rounded-[20px] lg:py-[54px] lg:px-[58px] px-4 py-5 lg:hover:shadow-lg duration-300 shadow lg:shadow-none lg:hover:scale-105  '>
        <Image src={Invited}/>
        <Pera text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."className="lg:w-[307px] lg:mt-5 mt-3 "/>

      <div className="flex gap-x-2 mt-5 mb-5">
          <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
      </div>
        <ClientReview src={ClientImageone} clientName="Eric Drake" text="Digital Marketor" />
        

    </div>

      <div className='bg-white rounded-[20px] lg:py-[54px] lg:px-[58px] px-4 py-5 lg:hover:shadow-lg duration-300 shadow lg:shadow-none lg:hover:scale-105  '>
        <Image src={Invited}/>
        <Pera text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."className="lg:w-[307px] lg:mt-5 mt-3"/>

      <div className="flex gap-x-2 mt-5 mb-5">
          <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
      </div>
        <ClientReview src={ClientImagetwo} clientName="Awlad Hossain" text="UX Researcher" />
        

    </div>

      <div className='bg-white rounded-[20px] lg:py-[54px] lg:px-[58px] px-4 py-5 lg:hover:shadow-lg duration-300 shadow lg:shadow-none lg:hover:scale-105  '>
        <Image src={Invited}/>
        <Pera text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."className="lg:w-[307px] lg:mt-5 mt-3"/>

      <div className="flex gap-x-2 mt-5 mb-5">
          <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
        <FaStar className='text-yellow-400'/>
      </div>
        <ClientReview src={ClientImagethree} clientName="Rosa Farmer" text="UI Designer" />
        

    </div>
    </div>
    
    </>
  )
}

export default ReviewsCard