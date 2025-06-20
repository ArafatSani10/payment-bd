import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['About the Service', 'Features', 'Integration', 'Service Coverage'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-5 py-3'>
        {/* Logo */}
        <img src="https://paybybd.com/assets/img/logo.png" alt="Logo" className='w-[150px]' />

        {/* Desktop Nav */}
        <ul className='hidden md:flex items-center space-x-8 text-indigo-900 font-medium'>
          {navItems.map((item, i) => (
            <li key={i} className='hover:text-blue-600 transition text-[14px] cursor-pointer'>{item}</li>
          ))}
          <li className='relative group cursor-pointer'>
            <span className='hover:text-blue-600 text-[14px]'>EN</span>
            <ul className='absolute top-full left-0 mt-2 bg-white text-black rounded shadow hidden group-hover:block w-24'>
              <li className='px-4 py-2 hover:bg-gray-100'>BN</li>
              <li className='px-4 py-2 hover:bg-gray-100'>EN</li>
            </ul>
          </li>
          <li>
            <a href='sms:+8801XXXXXXXXX' className='hover:text-blue-600 text-[14px]'>Gmail</a>
          </li>
          <li>
            <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition'>
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className='md:hidden text-2xl text-indigo-900 z-50' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-blue-600 transition-all duration-300 ease-in-out">
          <div className="w-full h-full bg-white px-6 pt-24 pb-10 text-sm text-indigo-900 font-medium">
            {navItems.map((item, index) => (
              <div key={index} onClick={() => setMenuOpen(false)} className='py-3 border-b hover:text-blue-600 cursor-pointer'>
                {item}
              </div>
            ))}
            <details className='py-3 border-b'>
              <summary className='cursor-pointer'>EN</summary>
              <ul className='ml-4 mt-1 space-y-1'>
                <li>BN</li>
                <li>EN</li>
              </ul>
            </details>
            <a href='sms:+8801XXXXXXXXX' onClick={() => setMenuOpen(false)} className='block py-3 border-b hover:text-blue-600'>
              Gmail
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className='mt-6 w-full bg-indigo-950 text-white py-2 rounded hover:bg-indigo-800 transition'
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
