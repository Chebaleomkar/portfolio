import React, { useState } from 'react';
import { blogs } from '../../constants';
import BlogPage from './BlogPage';
import Title from './Title';

const Blog = () => {
  

  return (
    <div className='bg-gray-800 h-screen'>
      <Title id='blog' title='Blogs' />
      <div className='text-white p-4'>
        {blogs.map((blog, index) => (
          <BlogPage key={index} link={blog.link} title={blog.title} topic={blog.topic} />
        ))}
      </div>

      
    </div>
  );
};

export default Blog;
