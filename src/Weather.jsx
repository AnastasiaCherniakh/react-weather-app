import './Weather.css';
import { useState, useEffect } from 'react';

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        // Fetch weather data by calling the serverless function with the city name
        async function fetchWeather() {
            const response = await fetch('/.netlify/functions/getWeather',{
                method: "POST",
                body: JSON.stringify({city : props.city})
            });
            const data = await response.json();
            setWeatherData({
                city: data.city,
                date: "Thursday 13:00",
                temperature: data.temperature.current,
                feels_like: data.temperature.feels_like,
                icon_url: data.condition.icon_url,
                description: data.condition.description
            })
        }

        fetchWeather()
    }, [props.city])
    return (
        <div className="Weather">
            <form className='search-city'>
                <input type="text" placeholder='Search for a city' autoFocus='on' />
                <button>Search</button>
            </form>
            {weatherData && (
                <section className='current-weather-info'>
                    <div className="current-weather-details">
                        <h1 className='city-name'>{weatherData.city}</h1>
                        <span className='current-date'>{weatherData.date}</span>
                        <h2 className='current-temperature'>{Math.round(weatherData.temperature)}°<span className='temperature-unit'>C | F</span></h2>
                        <p className='feels-like'>Feels like {Math.round(weatherData.feels_like)}°</p>
                    </div>
                    <div className="current-weather-icon">
                        <img src={weatherData.icon_url}
                        alt={weatherData.description} />
                        <p className='icon-description'>{weatherData.description}</p>
                    </div>
                </section>  
            )}
        </div> 
    )
}