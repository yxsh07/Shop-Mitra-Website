
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    phone: '',
    service: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send this data to a server.
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-shopmitra-blue">Thank You!</h2>
          <p className="mt-4 text-lg text-gray-600">We have received your request and will get back to you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">Ready to get started? Fill out the form below or contact us on WhatsApp.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shopmitra-blue" required />
              </div>
              <div>
                <label htmlFor="shopName" className="block text-gray-700 font-semibold mb-2">Shop Name</label>
                <input type="text" id="shopName" name="shopName" value={formData.shopName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shopmitra-blue" required />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shopmitra-blue" required />
            </div>
            <div className="mb-6">
              <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service Needed</label>
              <textarea id="service" name="service" value={formData.service} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shopmitra-blue" placeholder="e.g., I need a new banner for my shop" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full bg-shopmitra-orange text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300">
                Send Request
              </button>
            </div>
          </form>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Or connect with us directly:</p>
            <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.001 2C5.582 2 2 5.582 2 10.001c0 1.487.389 2.883 1.077 4.109l-1.01 3.636 3.725-1.028A7.953 7.953 0 0010.001 18c4.418 0 8-3.582 8-7.999C18 5.582 14.418 2 10.001 2zM8.995 14.75c-.328 0-.65-.05-.959-.148l-.078-.046-2.65 1.157.946-2.585-.148-.234a5.95 5.95 0 01-1.12-3.159c0-3.308 2.684-5.992 5.992-5.992 1.625 0 3.11.642 4.225 1.758 1.115 1.115 1.758 2.6 1.758 4.225 0 3.308-2.684 5.992-5.992 5.992a5.96 5.96 0 01-2.922-.766l-.168-.094z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
