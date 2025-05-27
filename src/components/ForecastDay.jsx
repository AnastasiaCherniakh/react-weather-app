export default function ForecastDay({ day }) {

    const displayDay = () => {
        let date = new Date(day.time * 1000);
        let weekday = date.getDay();

        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ];

        return days[weekday];
    }

    const formatTemperature = (temp) => `${Math.round(temp)}°`;
    
    return (
        <div className="day-forecast">
            <h3>{displayDay()}</h3>
            <img src={day.condition.icon_url} alt={day.condition.description} />
            <div className="max-min-temperature">
                <span className="max-temp">{formatTemperature(day.temperature.maximum)}</span>
                <span className="min-temp">{formatTemperature(day.temperature.minimum)}</span>
            </div> 
        </div>
    )
}