import React from "react";

const logos = [
  "https://paybybd.com/assets/img/payment/logo-white.webp",
  "https://paybybd.com/assets/img/payment/Mastercard-logo.webp",
  "https://paybybd.com/assets/img/payment/Mir-logo.SVG.webp",
  "https://paybybd.com/assets/img/payment/Orange_logo-2.webp",
  "https://paybybd.com/assets/img/payment/RuPay.webp",
  "https://paybybd.com/assets/img/payment/Visa_2021.webp",
  "https://paybybd.com/assets/img/payment/Vodafone.webp",
  "https://paybybd.com/assets/img/payment/We_logo.webp",
  "https://paybybd.com/assets/img/payment/phonepe.webp",
  "https://paybybd.com/assets/img/payment/cbep.webp",
  "https://paybybd.com/assets/img/payment/c6n.webp",
  "https://paybybd.com/assets/img/payment/tinkoff.webp",
  "https://paybybd.com/assets/img/payment/etisalat-logo.webp",
  "https://paybybd.com/assets/img/payment/Google_Pay_Logo.webp",
  "https://paybybd.com/assets/img/payment/Group.webp",
];

const MarqueeLogo = () => {
  return (
    <div className="relative overflow-hidden max-w-7xl  mx-auto py-8 rounded-2xl ">
      <div className="group overflow-hidden">
        <div
          className="flex w-max  animate-marquee group-hover:[animation-play-state:paused] gap-8 px-4"
          style={{ animationDuration: "40s" }}
        >
          {logos.concat(logos).map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="logo"
              loading="lazy"
              className="h-16 w-16 object-contain rounded-xl bg-white p-2 shadow hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
          animation-timing-function: linear;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default MarqueeLogo;
