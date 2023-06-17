const asyncRequest = require('async-request');

//
const getWeather = async (location) => {
    const access_key = "89ff0a7fd7463b01f0bf97e0ca3649c2";
    const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${location}`;
    try {
        const res = await asyncRequest(url);
        const data = JSON.parse(res.body);
        const weather = {
            isSuccess: true,
            region: data.location.region,
            country: data.location.country,
            temperature: data.current.temperature,
            wind_speed: data.current.wind_speed,
            precip: data.current.precip,
            cloudcover: data.current.cloudcover
        };
        console.log(weather);
        console.log(data);
        return weather;
    } catch (error) {
        console.log(error);
    };
    
}

getWeather("tokyo");