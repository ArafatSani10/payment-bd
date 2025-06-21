import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-white border-t border-gray-200 py-10 overflow-hidden">
            {/* Background world map image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://img.freepik.com/free-vector/worldwide-connection-gray-background-illustration-vector_53876-61772.jpg"
                    alt="world map"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            {/* Footer content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-black">PayByBd</span>
                </div>

                {/* Email */}
                <div>
                    <a
                        href="mailto:paybybd@gmail.com"
                        className="text-sm text-blue-700 hover:underline"
                    >
                        paybybd@gmail.com
                    </a>
                </div>

                {/* Telegram */}
                <div>
                    <span className="text-sm text-gray-700">
                        Telegram: <a href="https://t.me/paybybd" className="text-blue-700 hover:underline">@paybybd</a>
                    </span>
                </div>

                {/* Contact Button */}
                <div>
                    <a
                        href="#contact"
                        className="bg-green-600 text-white px-4 py-2 text-sm rounded hover:bg-green-700 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
