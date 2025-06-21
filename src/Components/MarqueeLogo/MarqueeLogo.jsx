import React from "react";

const logos = [
  "https://wp.logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon-700x662.png",
  "https://pngtom.com/files/preview/960x960/317020431739wsqe06kdzz8abbcj9ubb1txjumovorxogdiwsxfdahjy5lxcole5zugbetwsrclps4hvvlt84nfffvkb7aeykoiptprmrlpzsux.png",
  "https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvIJELJ5mEGZCQE0tzsovNo8m2LfumnAhJg&s",
  // আপনি চাইলে অন্য লোগোগুলো এখানে যোগ করতে পারেন
];

const MarqueeLogo = () => (
  <div className="relative overflow-hidden max-w-7xl mx-auto py-8 bg-white">
    <div className="group overflow-hidden">
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-8 px-4"
        style={{ animationDuration: "25s" }}
      >
        {logos.concat(logos).map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`logo-${idx}`}
            loading="lazy"
            className="h-20 w-auto object-contain p-2 rounded-full  hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
    <style jsx>{`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee linear infinite;
        will-change: transform;
      }
    `}</style>
  </div>
);

export default MarqueeLogo;
