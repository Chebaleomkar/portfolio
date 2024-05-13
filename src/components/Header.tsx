import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ui/ModeToggle'

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <nav className="flex justify-between items-center">
       
        <div>
          <Link href="#about">
            <b className="text-gray-300 hover:text-white px-3 py-1">About</b>
          </Link>
          <Link href="#projects">
            <b className="text-gray-300 hover:text-white px-3 py-1">Projects</b>
          </Link>
          <Link href="#blog">
            <b className="text-gray-300 hover:text-white px-3 py-1">Blog</b>
          </Link>
          <Link href="#education">
            <b className="text-gray-300 hover:text-white px-3 py-1">Education</b>
          </Link>
          <Link href="#contact">
            <b className="text-gray-300 hover:text-white px-3 py-1">Contact</b>
          </Link>
          <div>
            {/* <ModeToggle /> */}
          </div>
        </div>
      </nav>
    </div>
  </header>
  )
}

export default Header;