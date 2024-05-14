import React from 'react';
import { education } from '../../constants';
import Title from './Title';
import Image from 'next/image';

const Education = () => {
  return (
    <div className='min-h-screen bg-gray-800'>
      <Title id='education' title='Education' />
      <div className='container mx-auto py-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {education?.map((edu, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48'>
              <Image
                src={edu.img}
                layout='fill'
                objectFit='cover'
                className='rounded-full'
                alt='Institute'
              />
            </div>
            
            <h2 className='text-2xl font-semibold text-white mt-4'>{edu?.degree}</h2>
            <p className='text-lg text-gray-300'>{edu?.school}</p>
            <p className='text-lg text-gray-300'>{edu?.date}</p>
            <p className='text-lg text-gray-300'>{edu?.desc}</p>
            <hr className='h-0' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
