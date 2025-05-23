import 'dotenv/config';

// Fetch current weather data for a given city
export async function handler(event){
    const apiKey = process.env.WEATHER_API_KEY;
    const { city } = JSON.parse(event.body);

    const response = await fetch(`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`);
    const data = await response.json();

    return {
        statusCode: "200",
        body: JSON.stringify(data)
    }
}