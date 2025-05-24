import './Weather.css';
import CurrentWeather from './CurrentWeather';
import { useState, useEffect } from 'react';

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(props.defaultCity); // Triggers the fetch inside useEffect
    const [cityInput, setCityInput] = useState(''); // Tracks what the user types in the input
    useEffect(() => {
        // Fetch weather data by calling the serverless function with the city name
        async function fetchWeather() {
            try{
                const response = await fetch('/.netlify/functions/getWeather',{
                    method: "POST",
                     headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ city })
                });

                const data = await response.json();
                
                setWeatherData({
                    city: data.city,
                    date: new Date(data.time * 1000),
                    temperature: data.temperature.current,
                    feels_like: data.temperature.feels_like,
                    icon_url: data.condition.icon_url,
                    description: data.condition.description
                })
            }catch(error){
                console.error("Error fetching weather:", error.message);
            }
        }       
        fetchWeather()
    }, [city]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setCity(cityInput);
    }

    const handleCityChange = (event) => setCityInput(event.currentTarget.value);
    
    return (
        <div className="Weather">
            <form className='search-city' onSubmit={handleSubmit}>
                <input type="text" onChange={handleCityChange} 
                value={cityInput}
                placeholder='Search for a city' 
                autoFocus='on' />
                <button>Search</button>
            </form>
            {weatherData && <CurrentWeather weatherData={weatherData} />}
        </div> 
    )
}