import React from 'react';

const InfoCard = ({ imageUrl, title, description, link, linkText, onAiHelpClick, aiHelpType, cropType, varieties }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x250/cccccc/FFFFFF?text=Image+Not+Found'; }}/>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{cropType}</span>
            </div>
            <p className="text-gray-600 mb-2 flex-grow">{description}</p>
            <p className="text-sm text-gray-500 mb-4"><span className="font-semibold">Varieties:</span> {varieties}</p>
            <div className="mt-auto flex flex-wrap gap-2 items-center justify-between">
                 <a href={link} className="text-green-600 font-semibold hover:underline">
                    {linkText} <i className="fas fa-arrow-right ml-1"></i>
                </a>
                <button 
                    onClick={() => onAiHelpClick(title, description, 'seed')}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 text-sm font-semibold"
                >
                    ✨ Get AI Advice
                </button>
            </div>
        </div>
    </div>
);

export default function SeedsSection({ seeds, onAiHelpClick }) {
    return (
        <section id="seeds" className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Discover New Seed Varieties</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {seeds.map(seed => (
                    <InfoCard 
                        key={seed.id} 
                        imageUrl={seed.imageUrl} 
                        title={seed.name} 
                        description={seed.description} 
                        link={seed.link} 
                        linkText="View Details" 
                        onAiHelpClick={onAiHelpClick} 
                        aiHelpType="seed"
                        cropType={seed.type}
                        varieties={seed.varieties}
                    />
                ))}
            </div>
        </section>
    );
};