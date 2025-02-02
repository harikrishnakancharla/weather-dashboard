import React, { useState } from 'react';

const API_URL = 'http://127.0.0.1:5000/weather';

function App() {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await fetch(`${API_URL}?lat=${lat}&lon=${lon}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Weather Dashboard</h1>
            <input
                type="text"
                placeholder="Enter latitude"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter longitude"
                value={lon}
                onChange={(e) => setLon(e.target.value)}
            />
            <button onClick={fetchWeather}>Get Weather</button>

            {weather && (
                <div>
                    <h2>Weather Data</h2>
                    <pre>{JSON.stringify(weather, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;