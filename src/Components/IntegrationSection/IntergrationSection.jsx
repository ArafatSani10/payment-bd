import React from 'react';

const steps = [
  "APPLICATION SUBMISSION",
  "TERMS DISCUSSION",
  "API INTEGRATION",
  "TESTING AND DEBUGGING"
];

const IntegrationSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4   py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
        Integration
      </h1>

      {/* Timeline Container */}
      <div className="relative  flex items-center justify-center gap-6 sm:gap-10 md:gap-14 flex-wrap">

        {/* Connector Line (Behind everything) */}
        <div className="absolute top-1.5 left-0 right-0 h-[2px] bg-green-400  sm:mx-16 md:mx-20" />

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative  flex flex-col items-center min-w-[100px] sm:min-w-[140px] text-center z-10"
          >
            {/* Dot */}
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-600 mb-3" />

            {/* Step Text */}
            <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-800 leading-tight px-1">
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationSection;
