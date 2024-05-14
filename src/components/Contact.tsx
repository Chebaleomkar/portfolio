import React from 'react'
import Title from './Title'
import ContactUs from './ContactUs';
import { Bio } from '../../constants';
import Link from 'next/link';

import { FaFacebook , FaInstagram , FaTwitter ,FaGithubAlt,FaLinkedin    } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='bg-gray-800 min-h-screen flex flex-col justify-center'>
      <div className='container mx-auto'>
        <Title id='contact' title='Connect Me' />

        <div className='mt-8'>
          <ContactUs />
        </div>
        <div className="flex items-center justify-between text-5xl ">
    
          <span  className="m-2 p-2">
            <Link title='Go to facebook' href={Bio.facebook}>
                <span>
                   <FaFacebook />
                </span>
            </Link>
          </span>
          <span  className="m-2 p-2">
            <Link title='Go to Github' href={Bio.github}>
                <span>
                   <FaGithubAlt />
                </span>
            </Link>
          </span>
          <span  className="m-2 p-2">
            <Link title='Go to Twitter' href={Bio.twitter}>
                <span>
                   <FaTwitter />
                </span>
            </Link>
          </span>
          <span  className="m-2 p-2">
            <Link title='Go to Linkedin' href={Bio.linkedin}>
                <span>
                   <FaLinkedin />
                </span>
            </Link>
          </span>
     
   
      </div>
      </div>
    </div>
  )
}

export default Contact ;
