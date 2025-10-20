
import React from 'react';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-shopmitra-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Join as a Partner</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-blue-100">
          Are you a designer, marketer, printer, or service provider? Partner with us to get a steady stream of work from local businesses.
        </p>
        <a href="#contact" className="mt-8 inline-block bg-white text-shopmitra-blue text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
          Become a Partner
        </a>
      </div>
    </section>
  );
};

export default Partners;
