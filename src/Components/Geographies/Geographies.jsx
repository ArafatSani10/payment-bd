import React, { useState } from 'react';

const countries = [
  {
    name: 'Egypt',
    flag: 'https://flagcdn.com/w160/eg.png',
    description:
      'The most populous country and home to some of the most enthusiastic gamblers in the Arab world.',
    population: '110 million',
    activeInternetPercent: 71,
    betOnlinePercent: 18,
    payments: [
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/Fawry_logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/U_Pay_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    ],
  },
  {
    name: 'Russia',
    flag: 'https://flagcdn.com/w160/ru.png',
    description: 'A large population with increasing interest in online transactions and gaming.',
    population: '146 million',
    activeInternetPercent: 80,
    betOnlinePercent: 12,
    payments: [
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg',
      'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/3/33/MIR_Logo.svg',
    ],
  },
  {
    name: 'Bangladesh',
    flag: 'https://flagcdn.com/w160/bd.png',
    description: 'A growing digital market with a young, tech-savvy population.',
    population: '170 million',
    activeInternetPercent: 60,
    betOnlinePercent: 10,
    payments: [
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/9/94/Bkash_Logo.png',
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Nagad_Logo.png',
    ],
  },
  {
    name: 'India',
    flag: 'https://flagcdn.com/w160/in.png',
    description: 'One of the largest digital economies with millions of online users.',
    population: '1.4 billion',
    activeInternetPercent: 70,
    betOnlinePercent: 15,
    payments: [
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/3/3d/PhonePe-Logo.png',
      'https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.png',
    ],
  },
  {
    name: 'Uzbekistan',
    flag: 'https://flagcdn.com/w160/uz.png',
    description: 'An emerging digital audience showing steady growth.',
    population: '34 million',
    activeInternetPercent: 60,
    betOnlinePercent: 9,
    payments: [
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg',
      'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    ],
  },
];

const Geographies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const country = countries[activeIndex];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-950 mb-8">
          Geographies
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4">
          {countries.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                activeIndex === idx
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-indigo-900 hover:bg-green-50'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
          {country.description}
        </p>

        {/* Flag + Pie + Payments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-center">
          {/* Flag */}
          <div className="w-40 h-40 mx-auto rounded-full border-2 border-green-500 shadow-md flex items-center justify-center overflow-hidden">
            <img src={country.flag} alt={country.name} className="w-full h-full object-cover" />
          </div>

          {/* Pie Chart + Info Below */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-40 h-40 rounded-full border-2 border-green-500 shadow-md">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `conic-gradient(
                    #16a34a 0% ${country.activeInternetPercent}%,
                    #86efac ${country.activeInternetPercent}% ${
                    country.activeInternetPercent + country.betOnlinePercent
                  }%,
                    #ffffff ${
                    country.activeInternetPercent + country.betOnlinePercent
                  }% 100%)`,
                }}
              ></div>
            </div>

            <div className="text-center text-[13px] leading-snug">
              <p className="font-semibold mb-2">
                Total Population: {country.population}
              </p>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full bg-green-600 inline-block" />
                <span>Internet Users: {country.activeInternetPercent}%</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-300 inline-block" />
                <span>Bets Online: {country.betOnlinePercent}%</span>
              </div>
            </div>
          </div>

          {/* Payment Cards */}
          <div className="w-40 h-40 mx-auto rounded-full border-2 border-green-500 shadow-md flex items-center justify-center overflow-hidden">
            <div className="flex gap-4 px-4 animate-marquee">
              {country.payments.map((img, idx) => (
                <img key={idx} src={img} alt="payment" className="h-8 object-contain" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-50 mt-16 rounded-xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-sm">
          <div className="text-sm md:text-base text-gray-700 text-center md:text-left">
            <p className="font-medium">PayByBd – Reliable Payment Solutions Provider in Bangladesh.</p>
            <p>Contact us via Telegram and start working with us now.</p>
          </div>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition shadow">
            Contact Us
          </button>
        </div>
      </div>

      {/* Marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 12s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Geographies;
