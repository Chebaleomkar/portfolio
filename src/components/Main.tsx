import React from 'react';
import Project from './Project';
import About from './About';
import Blog from './Blog';
import Education from './Education';
import Contact from './Contact';

const Main = () => {
  return (
    <main className="min-h-screen">
      <About />
      <hr className="my-6 border-t border-blue-500" />
      <Project />
      <hr className="my-6 border-t border-yellow-200" />
      <Blog />
      <hr className="my-6 border-t border-orange-200" />
      {/* <Education /> */}
      <Contact />
    </main>
  );
};

export default Main;
