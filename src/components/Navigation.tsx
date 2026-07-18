'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Villa Mak
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-primary transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary transition">
            About
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-primary transition">
            Gallery
          </Link>
          <Link href="/booking" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-primary py-2">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-primary py-2">
            About
          </Link>
          <Link href="/gallery" className="block text-gray-700 hover:text-primary py-2">
            Gallery
          </Link>
          <Link href="/booking" className="block bg-primary text-white px-4 py-2 rounded text-center">
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
