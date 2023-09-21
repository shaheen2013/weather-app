const axios = require('axios');

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

async function getWeatherByCity(req, res) {
    const city = req.params.city;

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving weather data');
    }
}

module.exports = {
    getWeatherByCity
};
