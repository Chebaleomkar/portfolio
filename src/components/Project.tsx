import React, { useState } from 'react';
import { blogs } from '../../constants';
import BlogPage from './BlogPage';
import Title from './Title';

const Blog = () => {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const blogsToShow = showAllBlogs ? blogs : blogs.slice(0, 4);

  const toggleShowAllBlogs = () => {
    setShowAllBlogs(!showAllBlogs);
  };

  return (
    <div className='bg-gray-800'>
      <Title id='blog' title='Blogs' />
      <div className='text-white p-4'>
        {blogsToShow.map((blog, index) => (
          <BlogPage key={index} link={blog.link} title={blog.title} topic={blog.topic} />
        ))}
      </div>

      {!showAllBlogs && (
        <button
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
          onClick={toggleShowAllBlogs}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Blog;
