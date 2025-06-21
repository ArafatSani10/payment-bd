import React from 'react';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const WeOffer = () => {
  return (
    <motion.div
      className="w-full mt-28 px-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {/* Title */}
      <motion.div className="text-center mb-10" variants={fadeUp}>
        <h1 className="text-indigo-900 md:text-4xl text-2xl font-bold">We Offer</h1>
      </motion.div>

      {/* Content */}
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start gap-5">
        {/* Left Image */}
        <motion.div className="w-full lg:w-[400px] flex justify-center" variants={fadeUp}>
          <img
            src="https://paybybd.com/assets/img/features-3.png"
            alt="Features"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full rounded-xl shadow-md"
          />
        </motion.div>

        {/* Right Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1"
          variants={fadeUp}
        >
          {/* Card 1 */}
          <motion.div className=" p-6 rounded-xl   transition" variants={fadeUp}>
            <RiSecurePaymentLine size={50} className="text-red-400 mx-auto mb-3" />
            <h3 className="text-center font-semibold text-lg">Payment</h3>
            <p className="text-center text-gray-600 text-sm">
              Acceptance of payments for both high- and low-risk enterprises on the website
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div className=" p-6 rounded-xl  transition" variants={fadeUp}>
            <RiSecurePaymentLine size={50} className="text-red-400 mx-auto mb-3" />
            <h3 className="text-center font-semibold text-lg">Mass Payouts</h3>
            <p className="text-center text-gray-600 text-sm">
              Large payouts with a 96% success rate
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div className=" p-6 rounded-xl  transition" variants={fadeUp}>
            <RiSecurePaymentLine size={50} className="text-red-400 mx-auto mb-3" />
            <h3 className="text-center font-semibold text-lg">H2H Integration</h3>
            <p className="text-center text-gray-600 text-sm">
              A tested redirect with a high conversion rate or H2H integration
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition flex flex-col items-center justify-center" variants={fadeUp}>
            <p className="text-red-500 text-3xl font-bold">&gt;86%</p>
            <p className="text-center text-gray-700 text-sm mt-2">High Conversion Rate</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition flex flex-col items-center justify-center" variants={fadeUp}>
            <p className="text-indigo-600 text-xl font-semibold">API</p>
            <p className="text-center text-gray-700 text-sm mt-2">Quick integration</p>
          </motion.div>

          {/* Card 6 */}
          <motion.div className="bg-gray-50 p-6 rounded-xl border hover:shadow-md transition" variants={fadeUp}>
            <p className="text-center text-indigo-600 text-xl font-semibold">Antifraud</p>
            <p className="text-center text-gray-700 text-sm mt-2">
              Protection against parsing and flooding
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeOffer;
