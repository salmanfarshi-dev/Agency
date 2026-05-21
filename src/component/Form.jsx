import React from 'react'
import Button from './Button'

function Form() {
  return (
    <>
    <div className="lg:w-[500px] w-[340px] px-4 lg:py-[61px] py-5 lg:px-[43px] rounded-3xl bg-white">
        <h2 className='lg:text-[30px] text-[20px] font-bold font-inter text-center text-success'>Get a free quote now</h2>

        <form action="">
            <div className="flex flex-col lg:mb-5 lg:mt-[30px] mt-[20px] mb-3">
                <label className='font-medium text-[16px] text-success form-label'>Name</label>
                <input type="text" placeholder='Enter your name' className='lg:py-[19px] py-2 pl-4 lg:pl-[23px]  border border-gray-300 rounded-[10px] outline-none focus:border-gray-400 duration-300 mt-2'/>
            </div>
            <div className="flex flex-col lg:mb-5 mb-3">
                <label className='font-medium text-[16px] text-success form-label'>Email</label>
                <input type="text" placeholder='Enter your email' className='lg:py-[19px] py-2 pl-4 lg:pl-[23px]  border border-gray-300 rounded-[10px] outline-none focus:border-gray-400 duration-300 mt-2'/>
            </div>
            <div className="flex flex-col lg:mb-5 mb-3">
                <label className='font-medium text-[16px] text-success form-label'>Phone</label>
                <input type="tel" placeholder='Enter your phone' className='lg:py-[19px] py-2 pl-4 lg:pl-[23px]  border border-gray-300 rounded-[10px] outline-none focus:border-gray-400 duration-300 mt-2'/>

                <Button text="Get Pricing Now" className="lg:mt-5 mt-4"/>
            </div>
        </form>
    </div>

    </>
  )
}

export default Form