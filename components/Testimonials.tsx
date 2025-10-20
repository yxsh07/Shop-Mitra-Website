
import React from 'react';

const testimonialsData = [
  {
    quote: "ShopMitra helped me set up my Google page and now I get so many new customers. It was so easy!",
    name: "Ravi Kumar",
    shop: "Kumar Kirana Store",
    avatar: "https://picsum.photos/id/237/100/100",
  },
  {
    quote: "I needed new posters for my boutique and their design team was fantastic. The quality was great and the price was very fair.",
    name: "Priya Sharma",
    shop: "Priya's Boutique",
    avatar: "https://picsum.photos/id/238/100/100",
  },
  {
    quote: "Finding good suppliers was always a headache. ShopMitra connected me with a great vendor in just one day. Highly recommended!",
    name: "Amit Patel",
    shop: "Patel Electronics",
    avatar: "https://picsum.photos/id/239/100/100",
  },
];

const TestimonialCard: React.FC<{ quote: string; name: string; shop: string; avatar: string; }> = ({ quote, name, shop, avatar }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
        <p className="text-gray-600 italic mb-6">"{quote}"</p>
        <div className="flex items-center">
            <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="font-bold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{shop}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Shopkeepers Are Saying</h2>
          <p className="mt-4 text-lg text-gray-600">We're proud to be a trusted partner for businesses across India.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
