// src/LocationInput.jsx
import React, { useState } from 'react';

const LocationInput = ({ setLocation }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(inputValue);
        setInputValue(''); // Clear input after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Enter location" 
                required
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default LocationInput;
