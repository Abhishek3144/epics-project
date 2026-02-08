import React, { useState, useEffect } from 'react';


const SeedDetailModal = ({ seed, onClose, onAiHelpClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (seed) {
            setTimeout(() => setIsVisible(true), 10); 
        } else {
            setIsVisible(false);
        }
    }, [seed]);

    if (!seed) return null;

    return (
        <div 
            className={`fixed inset-0 z-50 flex justify-center items-center p-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
        >
            
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/70 to-slate-800/80 backdrop-blur-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
            </div>
            
            <div 
                className={`relative bg-white/98 backdrop-blur-xl rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/30 w-full max-w-6xl max-h-[95vh] flex flex-col md:flex-row overflow-hidden transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-12'}`}
                onClick={(e) => e.stopPropagation()}
            >
               
                <div className="w-full md:w-2/5 flex-shrink-0 relative overflow-hidden">
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 via-transparent to-blue-600/20 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20"></div>
                    
                    <img 
                        src={seed.imageUrl} 
                        alt={seed.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                    />
                    
                    
                    <div className="absolute top-6 left-6 z-30">
                        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-2 shadow-xl">
                            <span className="text-white font-bold text-sm tracking-wide">{seed.type}</span>
                        </div>
                    </div>
                </div>

                
                <div className="w-full md:w-3/5 p-8 lg:p-10 flex flex-col relative bg-gradient-to-br from-white via-gray-50/50 to-white">
                    
                    <button 
                        onClick={onClose} 
                        className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-100 to-white hover:from-red-50 hover:to-red-100 text-gray-400 hover:text-red-500 transition-all duration-500 flex items-center justify-center group shadow-lg hover:shadow-xl border border-gray-200 hover:border-red-200"
                    >
                        <span className="text-2xl group-hover:rotate-180 transition-transform duration-500">&times;</span>
                    </button>

                   
                    <div className="mb-8 pr-20">
                        <h3 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-800 via-gray-700 to-slate-600 bg-clip-text text-transparent leading-none mb-4">
                            {seed.name}
                        </h3>
                        <div className="flex items-center gap-3">
                            <div className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                            <span className="text-gray-500 font-medium tracking-wider">SEED PROFILE</span>
                        </div>
                    </div>

                    
                    <div className="overflow-y-auto flex-grow pr-4 -mr-4 space-y-4">
                        
                        <div className="group bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-2xl p-6 border border-green-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <i className="fas fa-calendar-alt text-white text-xl"></i>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-green-700 transition-colors duration-300">Sowing Time</h4>
                                    <p className="text-gray-700 font-medium text-lg">{seed['sowing time']}</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="group bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 rounded-2xl p-6 border border-amber-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <i className="fas fa-harvest text-white text-xl"></i>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-amber-700 transition-colors duration-300">Harvesting Time</h4>
                                    <p className="text-gray-700 font-medium text-lg">{seed['harvesting time']}</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="group bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-2xl p-6 border border-blue-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <i className="fas fa-seedling text-white text-xl"></i>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">Popular Varieties</h4>
                                    <p className="text-gray-700 leading-relaxed font-medium">{seed.varieties}</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="group bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 rounded-2xl p-6 border border-red-100 hover:border-red-200 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <i className="fas fa-mountain text-white text-xl"></i>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-700 transition-colors duration-300">Soil</h4>
                                    <p className="text-gray-700 leading-relaxed font-medium">{seed.soil}</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="group bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 rounded-2xl p-6 border border-purple-100 hover:border-purple-200 shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <i className="fas fa-info-circle text-white text-xl"></i>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors duration-300">Description</h4>
                                    <p className="text-gray-700 leading-relaxed font-medium">{seed.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <button 
                            onClick={() => onAiHelpClick(seed.name, seed.description, 'seed')}
                            className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 text-white px-8 py-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.02]"
                        >
                            
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            
                            
                            <div className="relative flex items-center justify-center gap-4">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                                    <i className="fas fa-brain text-2xl"></i>
                                </div>
                                <span className="group-hover:tracking-wider transition-all duration-500">Get AI Farming Advice</span>
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                                    <i className="fas fa-arrow-right text-xl"></i>
                                </div>
                            </div>
                            
                            
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute top-2 left-8 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
                                <div className="absolute bottom-3 right-12 w-1.5 h-1.5 bg-white/40 rounded-full animate-ping animation-delay-300"></div>
                                <div className="absolute top-4 right-20 w-1 h-1 bg-white/40 rounded-full animate-ping animation-delay-500"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const SeedCard = ({ seed, onSelectSeed }) => (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-3 transition-all duration-700 flex flex-col cursor-pointer border border-gray-100 hover:border-green-200 relative" onClick={() => onSelectSeed(seed)}>
        {/* Card glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-green-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 rounded-3xl transition-all duration-700"></div>
        
        <div className="relative overflow-hidden rounded-t-3xl">
            <img src={seed.imageUrl} alt={seed.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-3 py-1.5 transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-white font-bold text-sm tracking-wide">{seed.type}</span>
            </div>
            
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gray-800 font-bold flex items-center gap-2">
                        <i className="fas fa-eye"></i>
                        Explore Details
                    </span>
                </div>
            </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col justify-between relative">
            <h3 className="text-2xl font-bold text-gray-800 text-center group-hover:text-green-700 transition-colors duration-500 mb-4">
                {seed.name}
            </h3>
            
            <div className="text-center">
                <div className="inline-flex items-center gap-3 text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-500">
                    <span className="text-lg">View Details</span>
                    <i className="fas fa-arrow-right text-sm group-hover:translate-x-2 transition-transform duration-500"></i>
                </div>
            </div>
        </div>
    </div>
);

export default function SeedsPage({ seeds, onAiHelpClick }) {
    const [selectedSeed, setSelectedSeed] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 3; 
    
    const nextSlide = () => {
        setCurrentIndex(prev => 
            prev + cardsPerView >= seeds.length ? 0 : prev + cardsPerView
        );
    };
    
    const prevSlide = () => {
        setCurrentIndex(prev => 
            prev === 0 ? Math.max(0, seeds.length - cardsPerView) : Math.max(0, prev - cardsPerView)
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
            <div className="container mx-auto px-6 py-16">
                <section id="seeds">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent mb-6">
                            Discover New Seed Varieties
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Explore our curated collection of premium seeds to transform your farming experience
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-green-500 rounded-full"></div>
                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                                <i className="fas fa-seedling text-white text-sm"></i>
                            </div>
                            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
                        </div>
                    </div>
                    
                    
                    <div className="relative flex items-center justify-center">
                        
                        <button 
                            onClick={prevSlide}
                            className="absolute left-0 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-gray-600 hover:text-green-600 transition-all duration-300 transform hover:scale-110 hover:-translate-x-1"
                            disabled={currentIndex === 0}
                        >
                            <i className="fas fa-chevron-left text-xl"></i>
                        </button>
                        
                        
                        <div className="overflow-hidden mx-20 w-full">
                            <div 
                                className="flex transition-transform duration-700 ease-in-out gap-10"
                                style={{ transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)` }}
                            >
                                {seeds.map(seed => (
                                    <div key={seed.id} className="flex-shrink-0" style={{ width: `${100 / cardsPerView}%` }}>
                                        <SeedCard 
                                            seed={seed}
                                            onSelectSeed={setSelectedSeed}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        
                        <button 
                            onClick={nextSlide}
                            className="absolute right-0 z-10 w-14 h-14 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-gray-600 hover:text-green-600 transition-all duration-300 transform hover:scale-110 hover:translate-x-1"
                            disabled={currentIndex + cardsPerView >= seeds.length}
                        >
                            <i className="fas fa-chevron-right text-xl"></i>
                        </button>
                    </div>
                    
                    
                    <div className="flex justify-center mt-8 gap-2">
                        {Array.from({ length: Math.ceil(seeds.length / cardsPerView) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index * cardsPerView)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    Math.floor(currentIndex / cardsPerView) === index 
                                        ? 'bg-green-500 scale-125' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </section>
                
                <SeedDetailModal 
                    seed={selectedSeed} 
                    onClose={() => setSelectedSeed(null)}
                    onAiHelpClick={onAiHelpClick}
                />
            </div>
        </div>
    );
};