
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/id/10/600/400" alt="Team collaborating" className="rounded-lg shadow-xl" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About ShopMitra</h2>
            <p className="text-gray-600 mb-6">
              ShopMitra was born from a simple idea by a group of students: to empower the local shopkeepers who are the backbone of our communities. We saw them struggling with the complexities of digital tools, marketing, and finding reliable help. So, we created a single, trustworthy platform to solve all their problems. We're not just a service; we are a "mitra" – a friend to every shop owner.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-shopmitra-blue">Our Mission</h3>
                <p className="text-gray-600">To empower local businesses with the digital and operational support they need to thrive in the modern market.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-shopmitra-blue">Our Vision</h3>
                <p className="text-gray-600">To make every local shop in India digitally smart, operationally efficient, and highly successful.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
