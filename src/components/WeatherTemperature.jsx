import { useState } from 'react';
export default function WeatherTemperature({ celsius }) {

    const [unit, setUnit] = useState("celsius");
    let fahrenheit = (celsius * 9/5) + 32;

    const displayFahrenheit = () => setUnit("fahrenheit");
    const displayCelsius = () => setUnit("celsius");

    return (
        <h2 className='current-temperature'>
            {Math.round(unit === "celsius" ? celsius : fahrenheit)}°
                <span className='temperature-unit'>
                    <button 
                        className={`unit-button ${unit === 'celsius' ? 'active' : ''}`}
                        onClick={displayCelsius} 
                        title="Show Celsius"
                        disabled={unit === 'celsius'} 
                    >C</button>
                    {" | "}
                    <button 
                        className={`unit-button ${unit === 'fahrenheit' ? 'active' : ''}`} 
                        onClick={displayFahrenheit} 
                        title="Show Fahrenheit" 
                        disabled={unit === 'fahrenheit'}
                    >F</button>
                </span>
        </h2>
    );
}