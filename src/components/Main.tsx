import React from 'react'
import Project from './Project'
import About from './About';

const Main = () => {
   return( <>
    <main className="min-h-screen"> 
        <About />
        <Project />
    </main>
    </>
  )
};

export default Main;