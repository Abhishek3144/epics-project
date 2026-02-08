import React from 'react';

const SchemeCard = ({ title, description, link, bgColor, onAiHelpClick }) => (
    <div className={`rounded-lg shadow-lg text-white p-6 flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300 ${bgColor}`}>
        <div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 items-center justify-between">
            <a href={link} className="font-semibold hover:underline text-sm">Learn More &rarr;</a>
            <button
                onClick={() => onAiHelpClick(title, description)}
                className="bg-white/20 text-white px-3 py-1 rounded-full hover:bg-white/30 transition duration-300 text-xs font-semibold"
            >
                ✨ Explain Scheme
            </button>
        </div>
    </div>
);

export default function SchemesSection({ schemes, onAiHelpClick }) {
    return (
        <section id="schemes" className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest Government Schemes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {schemes.map(scheme => (
                    <SchemeCard 
                        key={scheme.id} 
                        title={scheme.title} 
                        description={scheme.description} 
                        link={scheme.link} 
                        bgColor={scheme.bgColor} 
                        onAiHelpClick={onAiHelpClick} 
                    />
                ))}
            </div>
        </section>
    );
};