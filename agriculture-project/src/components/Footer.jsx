import React from 'react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Farmer's Hub</h4>
                        <p className="text-gray-400">Providing timely and accurate information to empower the agricultural community.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul>
                           
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                       
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
                    <p>&copy; 2025 Farmer's Knowledge Hub. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};