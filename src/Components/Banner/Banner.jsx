import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-full  overflow-hidden">
      {/* Background (animated থাকলে আগের মত রাখতে পারো) */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-[#e6f4ff] via-[#f0faff] to-white"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-28 flex flex-col md:flex-row items-center gap-10 min-h-screen">
        {/* Left Texts */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-[#002b6b] leading-snug md:leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Handling payments across different business sectors.
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-700 text-sm md:text-lg max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Different Payment Options for Different Locations. Encompassing P2P, QR,
            and conventional Acquiring techniques.
          </motion.p>
          <motion.button
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started →
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img
            src="https://paybybd.com/assets/img/hero-img.webp"
            alt="Payment"
            className="w-full max-w-sm mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
