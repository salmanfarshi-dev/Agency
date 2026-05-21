import React from 'react'
import TaskManagementApp from './assets/Task Management App.png'
import SaasLandingPageDesign from './assets/Saas Landing Page Design.png'
import AppDesign from './assets/App Design.png'
import LandingPageDesign from './assets/Landing Page Design.png'
import WebAppDesign from './assets/Web App Design.png'
import DashboardDesign from './assets/Dashboard Design.png'
import Ideas from './assets/Idea.png'
import Support from './assets/Support.png'
import Pricing from './assets/Pricing.png'
import Star from './assets/star.png'
import VideoEditing from './assets/Video Editing.png'
import Customer from './assets/customer.png'
import Webdevelopment from './assets/Web Development.png'
import Miton from './assets/Motion Graphics.png'
import Animation from './assets/3D Animation.png'
import Marketing from './assets/Digital Marketing.png'
import Logo from './assets/logo.png'
import Agenc from './assets/Agenc.png'
import Webdesign from './assets/webdesign.png'
import Banner from './assets/Banner.png'
import Listitem from './component/Listitem'
import Button from './component/Button'
import Pera from './component/Pera'
import Subheading from './component/Subheading'
import Image from './component/Image'
import Cards from './component/Cards'
import H3tag from './component/h3tag'
import Span from './component/Span'
import Reviews from './layout/Reviews'
import Design from './layout/Design'
import Footer from './layout/Footer'
import Copyright from './layout/Copyright'


function App() {
  return (
   <>

   {/* navbar section  */}


 <div className='w-full lg:container mx-auto px-4 py-3 lg:px-20 lg:py-5 flex items-center justify-between'>

  <Image
    src={Logo}
    alt="logo"
    className="w-[100px] lg:w-[166px]"
  />

  <div className='hidden lg:flex gap-5'>
    <Listitem text="Home"/>
    <Listitem text="About"/>
    <Listitem text="Service"/>
    <Listitem text="Careers"/>
    <Listitem text="Contact"/>
  </div>

  <Button text="Contact"/>

</div>


 
{/* banner section  */}

<div className="flex flex-col lg:flex-row justify-between items-center container mx-auto lg:px-20 lg:mt-[95px] lg:mb-[150px] mt-10 mb-10 px-4 text-center lg:text-start">
  
  <div>
    <h1 className='font-bold font-inter text-4xl md:text-[70px] md:w-[600px] w-[300px] mx-auto lg:text-start leading-10 md:leading-[120%] text-success'>
      We Help brands with high quality services
    </h1>

    <Pera
      text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
      className="lg:text-[16px] lg:leading-[26px] lg:w-[604px] w-full pt-5 pb-5 text-center mx-auto lg:text-start text-[12px] leading-[20px]"
    />

    <Button text="Get Started" className="w-full lg:w-auto"/>
  </div>

  <Image
    src={Banner}
    className="md:w-[500px] w-[300px] object-cover mt-10 lg:mt-0"
  />

</div>




{/*  Success section  */}

<div className='lg:container grid grid-cols-3 lg:grid-cols-4 gap-y-5 lg:items-center lg:w-[90%] place-items-center lg:mx-auto justify-around lg:mt-[150px] mt-10 bg-[#F8F6FE] py-[70px] lg:px-[50px] rounded-[20px] px-4'>
  <div className ="col-span-3 lg:col-span-1 ">
    <span className='font-inter text-sm lg:text-[25px] text-primary font-medium'>Our Success</span>
    <H3tag text="West cost Brand makers-Global Edge" className="w-full lg:w-[340px] mt-[10px] text-[25px] lg:text-[30px]"/>
  </div>

  <div>
    <H3tag text="200+" className="font-bold text-xl lg:text-[35px]"/>
    <Pera text="Customer Satisfied" className="text-[10px] md:text-[16px] font-medium py-[10px] lg:py-[20px]"/>
    <Image src={Customer} className="w-[70px] md:w-[100px]"/>
  </div>
  <div>
    <H3tag text="4.5+" className="font-bold text-xl lg:text-[35px]"/>
    <Pera text="200+ Avg rating" className="text-[10px] lg:text-[16px] font-medium py-[10px] lg:py-[20px]"/>
    <Image src={Star} className="w-[70px] md:w-[100px]"/>
  </div>
  <div>
    <H3tag text="351+" className="font-bold text-xl lg:text-[35px]"/>
    <Pera text="Project Delivered" className="text-[10px] md:text-[16px] font-medium py-[10px] lg:py-[20px]"/>
    <a href="#" className='text-primary underline text-[10px] md:text-[18px] font-inter font-medium hover:no-underline duration-300'>See Works</a>
   
  </div>
</div>



{/* Services section  */}

<div className="lg:container mx-auto lg:px-20 px-4 lg:mb-[50px]">

<Subheading text="Our Provided Services"  className="text-xl pt-10 lg:pt-[150px]"/>
<Pera text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." className="lg:text-base text-sm w-full lg:w-[604px] mx-auto mt-2 lg:mt-5 text-center mb-10 lg:mb-[50px]"/>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center gap-y-16">
  <Cards src={Webdesign} tittle="Web Design" pera="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." className=" lg:hover:shadow-xl lg:py-10 py-5 lg:hover:-translate-y-5 duration-300" />
  <Cards src={VideoEditing} tittle="Video Editing" pera="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." className=" lg:hover:shadow-xl lg:py-10 py-5 lg:hover:-translate-y-5 duration-300"/>
  <Cards src={Webdevelopment} tittle="Web Development" pera="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." className=" lg:hover:shadow-xl lg:py-10 py-5 lg:hover:-translate-y-5 duration-300"/>
  <Cards src={Miton} tittle="Motion Graphics" pera="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." className=" lg:hover:shadow-xl lg:py-10 py-5 lg:hover:-translate-y-5 duration-300"/>
  <Cards src={Animation} tittle="3D Animation" pera="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." className=" lg:hover:shadow-xl lg:py-10 py-5 lg:hover:-translate-y-5 duration-300"/>
  <Cards src={Marketing} tittle="Digital Marketing" pera="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look." className=" lg:hover:shadow-xl lg:py-10 py-5 lg:hover:-translate-y-5 duration-300"/>


</div>
</div>


{/* work section  */}


<div className="lg:container mx-auto lg:px-20 px-4 bg-[#F3F3F3]">

  
<Subheading text="Our Recent Work"  className="text-xl pt-10 lg:pt-[150px]"/>
<Pera text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." className="lg:text-base text-sm w-full lg:w-[604px] mx-auto mt-2 lg:mt-5 text-center mb-10 lg:mb-[50px]"/>

<div className="flex flex-wrap gap-4 justify-between items-center mb-10 lg:mb-[50px]">
  <Span text="All"/>
  <Span text="Mobile Design"/>
  <Span text="Web design"/>
  <Span text="Branding"/>
  <Span text="Illustration"/>
  <Span text="Digital Marketing"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center gap-y-16 pb-10 lg:pb-[50px]">
  <Cards src={TaskManagementApp} tittle="Task Management App" pera="This is a task management application that can help you be more " className="pb-5 lg:pb-10" />
  <Cards src={SaasLandingPageDesign} tittle="Saas Landing Page Design" pera="This is a task management application that can help you be more  " className="pb-5 lg:pb-10"/>
  <Cards src={AppDesign} tittle="App Design" pera="This is a task management application that can help you be more " className="pb-5 lg:pb-10"/>
  <Cards src={LandingPageDesign} tittle="Landing Page Design" pera="This is a task management application that can help you be more " className="pb-5 lg:pb-10"/>
  <Cards src={DashboardDesign} tittle="Dashboard Design" pera="This is a task management application that can help you be more " className="pb-5 lg:pb-10"/>
  <Cards src={WebAppDesign} tittle="Web App Design" pera="This is a task management application that can help you be more "  />

</div>
</div>



{/* Choose Agenc  */}

<div className="lg:container mx-auto lg:px-20 px-4 lg-[150px] flex flex-col lg:flex-row justify-between items-end  lg:text-start lg:mb-[150px] mt-10 lg:mt-[150px]">

<div className="">
   <Subheading text="Why You Should Choose Agenc" className="lg:w-[500px] text-start"/>
<Pera text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." className="lg:w-[504px] lg:mt-5 text-sm"/>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center  gap-y-10 mt-10 lg:mt-[50px]">

  <div className="">
    <Image src={Ideas} alt="Innovative Ideas" />
    <H3tag text="Innovative Ideas" className="lg:text-[25px] mt-3 mb-2 lg:mt-5 lg:mb-2" />
    <Pera text="Because each project is different, we adapt to your business model" className="lg:w-[400px]" className="lg:w-[344px]"/>
  </div>
  <div className="lg:mt-10">
    <Image src={Support} alt="Dedicated Support" />
    <H3tag text="Dedicated Support" className="lg:text-[25px] mt-3 mb-2 lg:mt-5 lg:mb-2" />
    <Pera text="We provide 24/7 support for all our clients and serve them professionally." className="lg:w-[400px]" className="lg:w-[344px]"/>
  </div>
  <div className="lg:col-span-2 lg:flex flex-col items-center lg:items-start">
    <Image src={Pricing} alt="Honest Pricing" />
    <H3tag text="Honest Pricing" className="lg:text-[25px] mt-3 mb-2 lg:mt-5 lg:mb-2" />
    <Pera text="Pricing on projects are based on various analyzes and are cost effective." className="lg:w-[344px]"/>
  </div>

</div>
</div>
<Image src={Agenc} alt="Agency" className="lg:w-fit w-[300px] mx-auto py-20 lg:py-0"/>

</div>

<Reviews  />

<Design/>

<Footer/>
<Copyright/>


   </>











  )
}

export default App;