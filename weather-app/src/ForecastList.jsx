// src/ForecastList.jsx
import React from 'react';

const ForecastList = ({ forecasts }) => {
    return (
        <ul>
            {forecasts.map((forecast, index) => (
                <li key={index}>
                    {forecast.date}: {forecast.temperature}°C
                </li>
            ))}
        </ul>
    );
};

export default ForecastList;
