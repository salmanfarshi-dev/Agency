import React from 'react'
import Images from '../assets/logo.png'
import Image from '../component/Image'
import Pera from '../component/Pera'
import Subheading from '../component/Subheading'

function Footer() {
  return (
   <>
   
   <footer className='flex lg:flex-row flex-col gap-y-10 justify-between  items-start lg:pt-[150px] pt-[70px] pb-[40px] lg:pb-[90px] lg:px-20 px-5 '>

    <div className="">
        <Image src={Images} />
        <Pera text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority." className="lg:w-[350px] mt-[30px]"/>
    </div>

    <div className="">
       <h5 className='text-xl font-inter font-semibold text-success'>About</h5>
       <div className="lg:mt-10 mt-5 lg:gap-y-5 gap-y-3 flex flex-col">
         <Pera text="Careers"/>
         <Pera text="News"/>
         <Pera text="Features"/>
         <Pera text="Careers"/>
       </div>
    </div>
    <div className="">
       <h5 className='text-xl font-inter font-semibold text-success'>Company</h5>
       <div className="lg:mt-10 mt-5 lg:gap-y-5 gap-y-3 flex flex-col">
         <Pera text="Our Team"/>
         <Pera text="Partner With Us"/>
         <Pera text="FAQ"/>
         <Pera text="Blog"/>
       </div>
    </div>
    <div className="">
       <h5 className='text-xl font-inter font-semibold text-success'>Support</h5>
       <div className="lg:mt-10 mt-5 lg:gap-y-5 gap-y-3 flex flex-col">
         <Pera text="About"/>
         <Pera text="Feedback"/>
         <Pera text="Contact Us"/>
         <Pera text="Support Center"/>
         <Pera text="Accesbility"/>
       </div>
    </div>
    <div className="">
       <h5 className='text-xl font-inter font-semibold text-success'>Get in touch</h5>
       <div className="lg:mt-10 mt-5 lg:gap-y-5 gap-y-3 flex flex-col">
         <Pera text="info@gmail.com"/>
         <Pera text="+88 0121 0212"/>
       </div>
    </div>


    

   </footer>
   </>
  )
}

export default Footer