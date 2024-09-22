// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WeatherDisplay from './src/WeatherDisplay';
import LocationInput from './src/LocationInput';
import LoadingSpinner from './src/LoadingSpinner';
    
const App = () => {
    const [location, setLocation] = useState('India');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            try {
                const response = await fetch(`API_URL?location=${location}`); // Replace API_URL with your weather API endpoint
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [location]);

    return (
        <Router>
            <div>
                <LocationInput setLocation={setLocation} />
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <WeatherDisplay weatherData={weatherData} />
                )}
                <Switch>
                    <Route path="/:city" component={WeatherDisplay} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
