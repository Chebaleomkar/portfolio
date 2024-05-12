import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children } : {children : React.ReactDOM}) => {
  return (
    <div>
      <Head>
        <title>Your Portfolio</title>
        <meta name="description" content="Your description here" />
        {/* Add meta tags for SEO */}
      </Head>
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <div>
              <Link href="/">
                <a className="text-white text-xl font-bold">Your Name</a>
              </Link>
            </div>
            <div>
              <Link href="/about">
                <a className="text-gray-300 hover:text-white px-3 py-1">About</a>
              </Link>
              <Link href="/projects">
                <a className="text-gray-300 hover:text-white px-3 py-1">Projects</a>
              </Link>
              <Link href="/blog">
                <a className="text-gray-300 hover:text-white px-3 py-1">Blog</a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-300 hover:text-white px-3 py-1">Contact</a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        love love from omkar chebale
      </footer>
    </div>
  );
};

export default Layout;
