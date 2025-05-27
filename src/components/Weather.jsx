import './Weather.css';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForecast';
import { ClipLoader } from 'react-spinners';
import { useState, useEffect} from 'react';

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(props.defaultCity); // Triggers the fetch inside useEffect
    const [cityInput, setCityInput] = useState(''); // Tracks what the user types in the input
    const [unit, setUnit] = useState("celsius"); // Tracks the selected temperature unit (Celsius or Fahrenheit)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Fetch weather data by calling the serverless function with the city name
        async function fetchWeather() {
            setIsLoading(true);
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
                    icon: data.condition.icon,
                    description: data.condition.description
                })
            } catch (error) {
                console.error("Error fetching weather:", error.message);
            } finally {
                setIsLoading(false);
            }
        }       
        fetchWeather()
    }, [city]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedInput = cityInput.trim();
        if(trimmedInput){
            setCity(trimmedInput);
        }
    };

    const handleCityChange = (event) => setCityInput(event.currentTarget.value);
    
    return (
        <main className="Weather">
            <form className='search-city' onSubmit={handleSubmit}>
                <input type="text" onChange={handleCityChange} 
                value={cityInput}
                placeholder='Search for a city' 
                autoFocus='on' />
                <button>Search</button>
            </form>
            {isLoading ? (
                <div className="spinner">
                    <ClipLoader
                        color="#5C9EDC"
                        size={60}
                        ariaLabel="Loading Spinner"
                    />
                </div>
            ) : (
                <>
                    {weatherData && <CurrentWeather weatherData={weatherData} unit={unit} setUnit={setUnit} />}
                    <WeatherForecast city={city} unit={unit}/>
                </>
            )}
        </main> 
    )
}