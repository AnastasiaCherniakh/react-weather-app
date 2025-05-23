import 'dotenv/config';

// Fetch current weather data for a given city
export async function handler(event){
    try{
        const apiKey = process.env.WEATHER_API_KEY;

        if (!apiKey) {
            console.error("API key is missing!");
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Missing WEATHER_API_KEY" })
            };
        }

        if(!event.body){
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing request body" })
            };
        }

        console.log("EVENT BODY:", event.body);
        console.log("API KEY PRESENT:", !!apiKey);

        const { city } = JSON.parse(event.body);

        const response = await fetch(`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`);
        const data = await response.json();
    
        return {
            statusCode: "200",
            body: JSON.stringify(data)
        }
    }catch(error){
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
}