// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { db } from './firebase'; 
import { collection, getDocs } from 'firebase/firestore';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AiHelperModal from './components/AiHelperModal';

import HomePage from './pages/HomePage';
import SchemesPage from './pages/SchemesPage';
import SeedsPage from './pages/SeedsPage';
import EventsPage from './pages/EventsPage'; // Optional, if you have this page
import CropRecommender from './CropRecommender'; // Crop recommendation component
import PlantDiseasePredictor from "./components/PlantDiseasePredictor"; // disease predictor component

export default function App() {
    const [schemes, setSchemes] = useState([]);
    const [seeds, setSeeds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalState, setModalState] = useState({ title: null, content: '', isLoading: false });

    const getAiHelp = async (title, description, type) => {
    let prompt;
    let modalTitle;

    if (type === 'scheme') {
        prompt = `Explain the government scheme "${title}" with the description "${description}" in simple terms for a farmer in Madhya Pradesh, India. Focus on the key benefits, eligibility, and how to apply. Format the response clearly with headings.`;
        modalTitle = `✨ AI Explanation for: ${title}`;
    } else {
        prompt = `I am a farmer in Madhya Pradesh, India. Please provide advice about the seed variety "${title}" which is described as "${description}". Is this a good choice for my region? What are the benefits, potential risks, and best practices for planting this seed here?`;
        modalTitle = `✨ AI Advisor for: ${title}`;
    }

    setModalState({ title: modalTitle, content: '', isLoading: true });

    try {
        
        const apiKey = "AIzaSyC39jiVQPxmWsWxmmMHSvsnJLOkTgP8nao";
        
        console.log('Using API key:', apiKey ? 'API key present' : 'No API key');
        
        
        if (!apiKey) {
            throw new Error("API key is not configured.");
        }

        const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
        const payload = { contents: chatHistory };
        
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

        console.log('Making API call to:', apiUrl);

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        console.log('API response status:', response.status);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('API error data:', errorData);
            throw new Error(`API call failed with status: ${response.status}. ${errorData.error?.message || ''}`);
        }
        
        const result = await response.json();
        console.log('API result:', result);
        
        if (result.candidates && result.candidates[0]?.content.parts[0]) {
            const text = result.candidates[0].content.parts[0].text;
            setModalState({ title: modalTitle, content: text, isLoading: false });
        } else {
            throw new Error("Invalid response structure from API.");
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        let errorMessage = "Sorry, we couldn't get advice from our AI assistant at the moment. Please try again later.";
        
        if (error.message.includes("API key")) {
            errorMessage = "API key configuration error. Please check your API key setup.";
        } else if (error.message.includes("403")) {
            errorMessage = "Access denied. Please check your API key permissions and quota.";
        }
        
        setModalState({ 
            title: modalTitle, 
            content: `${errorMessage}\n\nError: ${error.message}`, 
            isLoading: false 
        });
    }
}
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const seedsSnapshot = await getDocs(collection(db, 'seeds'));
                setSeeds(seedsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

                const schemesSnapshot = await getDocs(collection(db, 'schemes'));
                setSchemes(schemesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><div className="text-2xl">Loading...</div></div>;
    }

    return (
        <Router>
            <div className="bg-gray-50 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/schemes" element={<SchemesPage schemes={schemes} onAiHelpClick={getAiHelp} />} />
                        <Route path="/seeds" element={<SeedsPage seeds={seeds} onAiHelpClick={getAiHelp} />} />
                        <Route path="/events" element={<EventsPage />} />
                        <Route path="/crop-recommendation" element={<CropRecommender />} />
                        <Route path="/disease" element={<PlantDiseasePredictor />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>

                </main>
                <Footer />
                <AiHelperModal 
                    title={modalState.title}
                    content={modalState.content}
                    isLoading={modalState.isLoading}
                    onClose={() => setModalState({ title: null, content: '', isLoading: false })}
                />
            </div>
        </Router>
    );
}