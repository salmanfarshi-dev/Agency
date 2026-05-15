import React from 'react'
import Star from './assets/star.png'
import Customer from './assets/customer.png'
import Logo from './assets/logo.png'
import Webdesign from './assets/webdesign.png'
import Banner from './assets/Banner.png'
import Listitem from './component/Listitem'
import Button from './component/Button'
import Pera from './component/Pera'
import Subheading from './component/Subheading'
import Image from './component/Image'
import Cards from './component/Cards'
import H3tag from './component/h3tag'


function App() {
  return (
   <>

   {/* navbar section  */}


   <div className='md:container px-2 py-3  md:py-5 flex items-center mx-auto justify-between '>
    <Image src={Logo} alt={Logo} className="w-[100px] md:w-[166px]"/>
   <div className='flex md:gap-5 invisible md:visible'>
     <Listitem text="Home"/>
     <Listitem text="About"/>
     <Listitem text="Service"/>
     <Listitem text="Careers"/>
     <Listitem text="Contact"/>
   </div>
   <Button text="Contact"/>

   </div>


 
{/* banner section  */}

<div className='md:flex md:justify-between items-center md:container md:mx-auto md:mt-[95px] mt-10 text-center md:text-start'>
  <div>
    <h1 className='font-bold font-inter text-4xl md:text-[70px] md:w-[600px] w-[300px] leading-10 mx-auto md:leading-[120%] text-success'>We Help brands with high quality services</h1>
    <Pera text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." className="md:text-[16px] md:leading-[26px] md:w-[604px] md:pt-[20px] md:pb-[30px] mt-5 w-[400px] mx-auto pb-5"/>
    <Button text="Get Started"/>
  </div>
  <Image src={Banner} className="md:w-[500px] w-[400px] mx-auto  object-fit-cover mt-16 md:mt-0"/>
</div>
 




{/* Our Success section  */}

<div className='md:container flex md:mx-auto justify-around md:mt-[150px] mt-10 bg-[#F8F6FE] py-[70px] md:px-[50px] rounded-[20px] px-4 '>
  <div>
    <span className='font-inter text-sm md:text-[25px] text-primary font-medium'>Our Success</span>
    <H3tag text="West cost Brand makers-Global Edge" className="w-[140px] md:w-[340px] mt-[10px] text-[15px] md:text-[30px]"/>
  </div>

  <div>
    <H3tag text="200+" className="font-bold text-[20px] md:text-[35px]"/>
    <Pera text="Customer Satisfied" className="text-[10px] md:text-[16px] font-medium py-[10px] md:py-[20px]"/>
    <Image src={Customer} className="w-[70px] md:w-[100px]"/>
  </div>
  <div>
    <H3tag text="4.5+" className="font-bold text-[20px] md:text-[35px]"/>
    <Pera text="200+ Avg rating" className="text-[10px] md:text-[16px] font-medium py-[10px] md:py-[20px]"/>
    <Image src={Star} className="w-[70px] md:w-[100px]"/>
  </div>
  <div>
    <H3tag text="351+" className="font-bold text-[20px] md:text-[35px]"/>
    <Pera text="Project Delivered" className="text-[10px] md:text-[16px] font-medium py-[10px] md:py-[20px]"/>
    <a href="#" className='text-primary underline text-[10px] md:text-[18px] font-inter font-medium hover:no-underline duration-300'>See Works</a>
   
  </div>
</div>



 
   </>
  )
}

export default App