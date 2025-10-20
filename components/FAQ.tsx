
import React, { useState } from 'react';

const faqData = [
  {
    question: "How much does it cost?",
    answer: "You only pay for the service you use, which is quoted by the vendor. ShopMitra charges a small, transparent commission on top of the service cost, which we will always communicate to you upfront."
  },
  {
    question: "How do you select your service partners?",
    answer: "All our partners (vendors, freelancers) are carefully vetted for quality, reliability, and fair pricing. We ensure they have a proven track record of excellent work before they join our network."
  },
  {
    question: "What if I'm not happy with the work?",
    answer: "Your satisfaction is our top priority. If you're not happy with the service, we will work with the partner to make it right or find an alternative solution for you."
  },
  {
    question: "Which cities do you operate in?",
    answer: "We are currently starting our operations in semi-urban and urban areas and are rapidly expanding. Contact us to see if we are available in your city."
  }
];

const FaqItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button onClick={onClick} className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800">
                <span>{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}>
                <p className="text-gray-600">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
