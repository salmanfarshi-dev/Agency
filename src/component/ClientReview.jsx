import React from 'react'

import Pera from './Pera'

function ClientReview({clientName,src,text}) {
  return (
    <div>
        <div className='flex gap-x-5'>
           <img src={src} alt="" />
            <div>
                <h4 className='text-xl font-semibold font-inter text-success'>{clientName}</h4>
                <p className='text-[16px] font-inter text-secondary'>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default ClientReview