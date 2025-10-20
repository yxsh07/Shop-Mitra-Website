
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gray-50 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Dukan ka har kaam <span className="text-shopmitra-blue">ek jagah</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Your reliable partner for every shop need. We connect you with trusted experts to get things done, so you can focus on your business.
            </p>
            <a href="#contact" className="mt-8 inline-block bg-shopmitra-orange text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300">
                Get Help Now
            </a>
        </div>
    </section>
  );
};

export default Hero;
