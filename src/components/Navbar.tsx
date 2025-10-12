'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/haylar_logo.png"
                alt="<strong>HAYLAR</strong> Energy Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-black hover:text-[#2e125b] px-3 py-2 rounded-sm text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-black hover:text-[#2e125b] px-3 py-2 rounded-sm text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/services" className="text-black hover:text-[#2e125b] px-3 py-2 rounded-sm text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/#why-choose-us" className="text-black hover:text-[#2e125b] px-3 py-2 rounded-sm text-sm font-medium transition-colors">
                Why Choose Us
              </Link>
              <Link href="/contact" className="text-black hover:text-[#2e125b] px-3 py-2 rounded-sm text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-[#2e125b] focus:outline-none focus:ring-2 focus:ring-[#2e125b] focus:ring-offset-2 p-2 rounded-sm"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200" role="menu" aria-label="Mobile navigation menu">
              <Link 
                href="/" 
                className="text-black hover:text-[#2e125b] block px-3 py-2 rounded-sm text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-black hover:text-[#2e125b] block px-3 py-2 rounded-sm text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-black hover:text-[#2e125b] block px-3 py-2 rounded-sm text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/#why-choose-us" 
                className="text-black hover:text-[#2e125b] block px-3 py-2 rounded-sm text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </Link>
              <Link 
                href="/contact" 
                className="text-black hover:text-[#2e125b] block px-3 py-2 rounded-sm text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
