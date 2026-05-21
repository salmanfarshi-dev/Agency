import React from 'react'
import Form from '../component/Form'
import Subheading from '../component/Subheading'
import Pera from '../component/Pera'

function Design() {
  return (
   <>

   <div className="flex lg:flex-row lg:px-20 px-4 items-center bg-[#F3F3F3] lg:py-[150px] flex-col py-10 gap-y-10">
    <div className="lg:w-1/2">
     <Subheading text="We Do design, Code & Development" className="lg:w-[440px] text-start lg:leading-[58px]"/>
     <Pera text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority." className="lg:w-[510px] mt-5 mb-3"/>
     <Pera text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." className="lg:w-[520px]"/>
    </div>
    <div className="lg:w-1/2">
    
   <Form  />
    </div>
    

   </div>
   
   </>
  )
}

export default Design