import React, { useState, useEffect } from 'react';


const SchemeDetailModal = ({ scheme, onClose, onAiHelpClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (scheme) {
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
        }
    }, [scheme]);

    if (!scheme) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex justify-center items-center p-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
            <div
                className={`bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden transition-all duration-500 ease-out transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8'}`}
                onClick={(e) => e.stopPropagation()}
            >
                
                <div 
                    className="w-full h-56 bg-cover bg-center relative flex items-center justify-center overflow-hidden"
                    style={{ backgroundImage: `url(${scheme.imageUrl})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-20"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    
                    <div className="text-center z-10 px-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                            {scheme.title}
                        </h2>
                        <div className="w-24 h-1 bg-white/80 mx-auto rounded-full"></div>
                    </div>
                </div>

                
                <div className="p-10 flex flex-col flex-grow overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white">
                    
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-4"></div>
                            <h4 className="text-xl font-bold text-gray-800">Key Information</h4>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <p className="text-gray-700 text-lg leading-relaxed">{scheme.keyInfo}</p>
                        </div>
                    </div>

                    
                    <div className="mb-8">
                        <div className="flex items-center mb-4">
                            <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-4"></div>
                            <h4 className="text-xl font-bold text-gray-800">Required Documents</h4>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed">{scheme.requiredDocs}</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="mt-auto pt-8 space-y-4">
                        <a 
                            href={scheme.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block text-center w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-6 py-4 rounded-2xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 text-lg font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-0.5 border border-gray-200"
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                                <span>Visit Official Website</span>
                            </div>
                        </a>

                        <button
                            onClick={() => onAiHelpClick(scheme.title, scheme.description, 'scheme')}
                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 text-lg font-semibold relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                            <span className="relative z-10">Explain with AI</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const SchemeCard = ({ scheme, onSelectScheme }) => (
    <div 
        className="rounded-2xl shadow-lg bg-white transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group" 
        onClick={() => onSelectScheme(scheme)}
    >
        
        <div className="h-48 w-full overflow-hidden relative">
            <img 
                src={scheme.imageUrl} 
                alt={scheme.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            
            
            <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Government Scheme
                </span>
            </div>
        </div>
        
        
        <div className="p-6 flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                {scheme.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {scheme.description}
            </p>
            
            
            <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                <span>View Details</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </div>
        </div>

        
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
);

export default function SchemesPage({ schemes, onAiHelpClick }) {
    const [selectedScheme, setSelectedScheme] = useState(null);

    return (
        <div className="container mx-auto px-6 py-16">
            <section id="schemes">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Latest Government Schemes
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover and explore the latest government initiatives designed to support citizens and communities
                    </p>
                </div>

                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {schemes.map(scheme => (
                        <SchemeCard
                            key={scheme.id}
                            scheme={scheme}
                            onSelectScheme={setSelectedScheme}
                        />
                    ))}
                </div>
            </section>
            
            <SchemeDetailModal
                scheme={selectedScheme}
                onClose={() => setSelectedScheme(null)}
                onAiHelpClick={onAiHelpClick}
            />
        </div>
    );
};