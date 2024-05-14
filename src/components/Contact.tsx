import React from 'react'
import Title from './Title'
import ContactUs from './ContactUs'

const Contact = () => {
  return (
    <div className='bg-gray-800 min-h-screen flex flex-col justify-center'>
      <div className='container mx-auto'>
        <Title id='contact' title='Connect Me' />
        
        <div className='mt-8'>
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default Contact ;
