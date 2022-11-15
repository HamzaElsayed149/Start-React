import React from 'react'

export default function Contact() {
  return (
    <div className='contact  d-flex  justify-content-center   mt-5   w-100 text-dark py-5' >
        <div className="container">
        <h1 className='mb-4 text-center  fw-bolder '>CONTACT ME
</h1>
        
        <div className='  d-flex flex-column   pb-4 justify-content-center'>
<input type="text"placeholder='Name ' className=' input-group-text w-100 mb-4  text-start' />            
<input type="text"placeholder='Email Address ' className=' input-group-text w-100 mb-4 text-start ' />            
<input type="text"placeholder='Phone Number ' className=' input-group-text w-100 mb-4  text-start' />            
<input type="text"placeholder='Message ' className=' input-group-text w-100  text-start' />            
        </div>
        <button className='btn btn-primary btn-group-sm'>send</button>

        </div>
        </div>  )
}
