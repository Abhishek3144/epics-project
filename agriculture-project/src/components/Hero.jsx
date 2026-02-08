import React from 'react';

export default function Hero() {
    return (
        <header id="home" className="relative text-white">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1600x800/228B22/FFFFFF?text=Lush+Fields')" }}></div>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="container mx-auto px-6 py-24 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Empowering Farmers with Knowledge</h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">Your one-stop dashboard for the latest government schemes and advanced seed technologies.</p>
                <a href="#schemes" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">Explore Schemes</a>
            </div>
        </header>
    );
};