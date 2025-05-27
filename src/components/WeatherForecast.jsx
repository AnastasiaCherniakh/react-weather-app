import './WeatherForecast.css';
import ForecastDay from './ForecastDay';
import { useEffect, useState } from 'react';

export default function WeatherForecast({ city, unit }) {

    const [forecast, setForecast] = useState([]);

    useEffect(()=> {
        // Fetch weather forecast data by calling the serverless function with the city name
        async function fetchWeatherForecast() {
            try {
                const response = await fetch('/.netlify/functions/getWeatherForecast', {
                    method: 'POST',
                     headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ city })
                });

                const data = await response.json();
                setForecast(data.daily);
                
            }catch(error){
                console.error("Error fetching weather forecast:", error.message);
            }
        }
        fetchWeatherForecast();
    }, [city]);
    return (
        <section className="forecast">
            {forecast && forecast.slice(0, 5).map((day) => (
                     <ForecastDay key={day.time} day={day} unit={unit}/>
                ))}
        </section>
    )
}