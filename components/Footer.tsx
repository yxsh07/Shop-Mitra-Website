
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">ShopMitra</h3>
                        <p className="text-gray-400">Your reliable partner for every shop need.</p>
                    </div>
                    <div className="flex space-x-4">
                        {/* Replace with actual social media links */}
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} ShopMitra. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
