import FormattedDate from './FormattedDate';
export default function CurrentWeather( {weatherData} ) {
    return (
        <section className='current-weather-info'>
            <div className="current-weather-details">
                <h1 className='city-name'>{weatherData.city}</h1>
                <span className='current-date'>
                    <FormattedDate date={weatherData.date}/>
                </span>
                <h2 className='current-temperature'>{Math.round(weatherData.temperature)}°<span className='temperature-unit'>C | F</span></h2>
                <p className='feels-like'>Feels like {Math.round(weatherData.feels_like)}°</p>
            </div>
            <div className="current-weather-icon">
                <img src={weatherData.icon_url}
                alt={weatherData.description} />
                <p className='icon-description'>{weatherData.description}</p>
            </div>
        </section>  

    )
}