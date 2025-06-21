import React from 'react';

const About = () => {
    return (
        <section className="w-full px-4 py-10 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-800 mb-6">
                    About the Service
                </h1>
                <p className="text-sm md:text-xl mt-10 font-medium text-gray-700 bg-sky-50 border border-sky-200 px-6 py-10 rounded-2xl shadow-md transition  duration-300">
                    Online payments to personal and commercial accounts can be made easily with <span className="font-semibold text-indigo-800">PayByBd</span>.
                </p>
            </div>
        </section>
    );
};

export default About;
