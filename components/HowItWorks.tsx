
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Tell Us Your Need',
      description: 'Simply tell us what service you need, whether it\'s marketing, printing, or anything else.',
    },
    {
      step: 2,
      title: 'We Find the Right Expert',
      description: 'We connect you with a trusted and verified vendor or freelancer from our network.',
    },
    {
      step: 3,
      title: 'Get Your Work Done',
      description: 'The work gets completed to your satisfaction. You pay on completion, plus a small commission to us.',
    },
  ];

  return (
    <section id="howitworks" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">Getting help is as easy as 1-2-3.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((item) => (
            <div key={item.step} className="p-6">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-shopmitra-blue text-white font-bold text-2xl mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
