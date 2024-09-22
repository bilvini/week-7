// src/WeatherDisplay.jsx
import React from 'react';
import ForecastList from './ForecastList';

const WeatherDisplay = ({ weatherData }) => {
    if (!weatherData) return null;

    return (
        <div>
            <h2>{weatherData.city}</h2>
            <p>{weatherData.current.temperature}°C</p>
            <ForecastList forecasts={weatherData.daily} />
        </div>
    );
};

export default WeatherDisplay;
