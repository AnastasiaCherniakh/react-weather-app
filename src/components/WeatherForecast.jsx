import './WeatherForecast.css'
import { useEffect } from 'react';

export default function WeatherForecast({ city }) {

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
                console.log(data);
            }catch(error){
                console.error("Error fetching weather forecast:", error.message);
            }
        }
        fetchWeatherForecast();
    }, [city]);
    return (
        <section className="forecast">
            <div className="day-forecast">
                <h3>Mon</h3>
                <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt='clear sky' />
                <div className="max-min-temperature">
                    <span className="max-temp">21°</span>
                    <span className="min-temp">9°</span>
                </div>
            </div>
        </section>
    )
}