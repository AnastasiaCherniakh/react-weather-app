import 'dotenv/config';

// Fetch weather forecast data for a given city
export async function handler(event) {
    try{
        const apiKey = process.env.WEATHER_API_KEY;

        if(!apiKey){
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Missing WEATHER_API_KEY" })
            };
        }

        if(!event.body) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing request body" })
            };
        }

        const { city } = JSON.parse(event.body);

        const response = await fetch(`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify( data )
        };
    }catch(error){
        console.error("Fetch error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Something went wrong", details: error.message })
        };
    } 
}