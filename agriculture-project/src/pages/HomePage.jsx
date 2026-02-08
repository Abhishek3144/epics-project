import React from 'react';

const Hero = () => (
    <header id="home" className="relative text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1600x800/228B22/FFFFFF?text=Lush+Fields')" }}></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 py-24 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Empowering Farmers with Knowledge</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto">Your one-stop dashboard for the latest government schemes and advanced seed technologies.</p>
           
        </div>
    </header>
);

export default function HomePage() {
    return <Hero />;
}