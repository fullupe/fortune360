'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, Menu, X } from 'lucide-react'


export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black text-white py-4 px-6 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* <Link href="/" className="text-2xl font-bold hidden sm:block"> */}
            {/* <span className="sr-only">Effect House</span> */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
            </svg>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:text-gray-300">About Us</Link>
            <Link href="/projects" className="hover:text-gray-300">Projects</Link>
            <Link href="/partners" className="hover:text-gray-300">Partners</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          {/* <Bell className="w-6 h-6" /> */}
         
          <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
            <Link href="/">
            Fortune🎱360
            </Link>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-900 rounded-lg p-4 absolut z-10">
          <nav className="flex flex-col space-y-2">
            <Link href="/about" className="hover:text-gray-300">About Us</Link>
            <Link href="/projects" className="hover:text-gray-300">Project</Link>
            <Link href="/partners" className="hover:text-gray-300">Partners</Link>
            <Link href="#" className="hover:text-gray-300">Community</Link>
          </nav>
        </div>
      )}
    </header>
  )
}