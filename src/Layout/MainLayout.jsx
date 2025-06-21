import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from '../Components/Pages/shared/Navbar/Navbar';
import Footer from '../Components/Pages/shared/Footer/Footer';

const MainLayout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-montserrat relative">
      <Navbar />
      <Outlet />
      <Footer />

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all duration-300 animate-bounce"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default MainLayout;
