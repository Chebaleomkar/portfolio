import React from 'react';
import Project from './Project';
import About from './About';
import Blog from './Blog';

const Main = () => {
  return (
    <main className="min-h-screen">
      <About />
      <hr className="my-6 border-t border-blue-500" />
      <Project />
      <hr className="my-6 border-t border-yellow-200" />
      <Blog />
      <hr className="my-6 border-t border-orange-200" />
    </main>
  );
};

export default Main;
