import FormattedDate from './FormattedDate';
import WeatherTemperature from './WeatherTemperature';
import { useEffect } from 'react';
export default function CurrentWeather( {weatherData, unit, setUnit} ) {

    useEffect(() => {

        // Map icon descriptions with corresponding CSS classes
        const descriptionToClass = {
            "clear-sky-day" : "weather-clear",
            "clear-sky-night" : "weather-clear",
            "few-clouds-day" : "weather-clouds",
            "few-clouds-night" : "weather-clouds",
            "scattered-clouds-day" : "weather-clouds",
            "scattered-clouds-night" : "weather-clouds",
            "broken-clouds-day" : "weather-clouds",
            "broken-clouds-night" : "weather-clouds",
            "shower-rain-day" : "weather-rain",
            "shower-rain-night" : "weather-rain",
            "rain-day" : "weather-rain",
            "rain-night" : "weather-rain",
            "thunderstorm-day" : "weather-thunder",
            "thunderstorm-night" : "weather-thunder",
            "snow-day" : "weather-mist",
            "snow-night" : "weather-mist",
            "mist-day" : "weather-mist",
            "mist-night" : "weather-mist"
        };

        const className = descriptionToClass[weatherData.icon];

        // Remove all previous weather-related classes
        document.body.classList.remove(
            "weather-clear",
            "weather-clouds",
            "weather-rain",
            "weather-thunder",
            "weather-mist"
        );

        // Add the new class based on the weather icon
        if(className) {
            document.body.classList.add(className);
        }

    }, [weatherData.icon]);

    return (
        <section className='current-weather-info'>
            <div className="current-weather-details">
                <h1 className='city-name'>{weatherData.city}</h1>
                <span className='current-date'>
                    <FormattedDate date={weatherData.date}/>
                </span>
                <WeatherTemperature celsius={weatherData.temperature} unit={unit} setUnit={setUnit}/>
                <p className='weather-details'>
                    Feels like {Math.round( unit=== 'celsius' 
                        ? weatherData.feels_like
                        : (weatherData.feels_like * 9 / 5 + 32))}°
                </p>
                <p className='weather-details'>
                    Humidity: {weatherData.humidity}%
                </p>
            </div>
            <div className="current-weather-icon">
                <img src={weatherData.icon_url}
                alt={weatherData.description} />
                <p className='icon-description'>{weatherData.description}</p>
            </div>
        </section>  

    )
}