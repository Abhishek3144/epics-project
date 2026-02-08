// src/CropRecommender.jsx
import React, { useState } from 'react';
import './CropRecommender.css'; // This CSS file will contain the styles
import { cropImageUrls } from './CropImageUrls';
const CropRecommender = () => {
    const [city, setCity] = useState('');
    const [recommendationData, setRecommendationData] = useState(
        'Enter a city and click "Recommend Crops".'
    );

    const getRecommendation = async () => {
        if (!city) {
            setRecommendationData('Please enter a city name.');
            return;
        }

        setRecommendationData('Loading...');

        // Note: Hardcoded API key is a security risk. It's better to use environment variables.
        const apiKey = '39a641d8c7c530d197d33cc2a57d3669';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.cod === '404') {
                setRecommendationData('City not found.');
                return;
            }

            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const description = data.weather[0].description.toLowerCase();
            const cityName = data.name;
            const countryName = data.sys.country;

            let recommendedCrops = [];
            if (temperature >= 0 && temperature <= 10 && humidity >= 0 && humidity <= 20) {
                recommendedCrops = ["Barley", "Oats", "Rye", "Wheat", "Potatoes", "Carrots", "Beets", "Cabbage", "Kale", "Spinach"];
            } else if (temperature >= 0 && temperature <= 10 && humidity > 20 && humidity <= 50) {
                recommendedCrops = ["Peas", "Lentils", "Chickpeas", "Lettuce", "Radishes", "Turnips", "Onions", "Garlic", "Leeks", "Broccoli", "Cauliflower", "Brussels Sprouts"];
            } else if (temperature >= 0 && temperature <= 10 && humidity > 50 && humidity <= 100) {
                recommendedCrops = ["Celery", "Parsley", "Cilantro", "Dill", "Fennel", "Swiss Chard", "Mustard Greens", "Collard Greens", "Endive", "Arugula"];
            } else if (temperature > 10 && temperature <= 25 && humidity >= 0 && humidity <= 20) {
                recommendedCrops = ["Corn", "Soybeans", "Sunflower", "Lentils", "Chickpeas", "Quinoa", "Millet", "Sorghum", "Buckwheat", "Flax"];
            } else if (temperature > 10 && temperature <= 25 && humidity > 20 && humidity <= 50) {
                recommendedCrops = ["Eggplant", "Peppers", "Tomatoes", "Cucumber", "Zucchini", "Pumpkin", "Squash", "Green Beans", "Okra", "Melons"];
            } else if (temperature > 10 && temperature <= 25 && humidity > 50 && humidity <= 100) {
                recommendedCrops = ["Rice", "Sugarcane", "Wheat", "Jute", "Coconut", "Banana", "Pineapple", "Mango", "Cashew", "Taro", "Yam"];
            } else if (temperature > 25 && temperature <= 40 && humidity >= 0 && humidity <= 20) {
                recommendedCrops = ["Cotton", "Alfalfa", "Safflower", "Sesame", "Peanuts", "Pistachios", "Almonds", "Walnuts", "Pecans", "Dates"];
            } else if (temperature > 25 && temperature <= 40 && humidity > 20 && humidity <= 50) {
                recommendedCrops = ["Papaya", "Guava", "Passion Fruit", "Dragon Fruit", "Lychee", "Jackfruit", "Breadfruit", "Starfruit", "Soursop", "Durian"];
            } else if (temperature > 25 && temperature <= 40 && humidity > 50 && humidity <= 100) {
                recommendedCrops = ["Tea", "Coffee", "Rubber", "Black Pepper", "Vanilla", "Cardamom", "Cinnamon", "Nutmeg", "Cloves", "Turmeric"];
            } else if (temperature > 40 && temperature <= 100 && humidity >= 0 && humidity <= 20) {
                recommendedCrops = ["Agave", "Cactus", "Jojoba", "Prickly Pear", "Mesquite", "Baobab", "Tamarind", "Neem", "Moringa", "Acacia"];
            } else if (temperature > 40 && temperature <= 100 && humidity > 20 && humidity <= 50) {
                recommendedCrops = ["Olive", "Fig", "Pomegranate", "Grapes", "Apricot", "Peach", "Plum", "Cherry", "Aloe Vera", "Lavender"];
            } else if (temperature > 40 && temperature <= 100 && humidity > 50 && humidity <= 100) {
                recommendedCrops = ["Cocoa", "Cashew", "Palm Oil", "Pineapple", "Mango", "Cashew", "Taro", "Yam", "Rice"];
            } else {
                recommendedCrops = ["Maize", "Beans", "Tomatoes", "Peppers", "Eggplant", "Cucumber", "Pumpkin", "Watermelon"];
            }

            const randomCrop = recommendedCrops[Math.floor(Math.random() * recommendedCrops.length)];
            const imageUrl = cropImageUrls[randomCrop] || '';

            setRecommendationData(
                <div>
                    <p><strong>City:</strong> {cityName}, {countryName}</p>
                    <p><strong>Recommended Crop:</strong> {randomCrop}</p>
                    <p><strong>Temperature:</strong> {temperature} °C</p>
                    <p><strong>Humidity:</strong> {humidity}%</p>
                    <p><strong>Weather:</strong> {description}</p>
                    <img src={imageUrl} alt={randomCrop} className="crop-image" />
                </div>
            );
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setRecommendationData('Error fetching weather data.');
        }
    };

    return (
        <div id="recommendation-container">
            <h2>CROP RECOMMENDATION</h2>
            <input
                type="text"
                id="city-input"
                placeholder="Enter City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button id="recommend-button" onClick={getRecommendation}>
                Recommend Crops
            </button>
            <div id="recommendation-data">
                {recommendationData}
            </div>
        </div>
    );
};

export default CropRecommender;