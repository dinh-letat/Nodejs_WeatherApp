const asyncRequest = require('async-request');

//
const getWeather = async () => {
    const url =
        "http://api.weatherstack.com/current?access_key=74bc2df6acd3ce0ac552f5ce37cd418c&query=New%20York";
        const res = await asyncRequest(url);
        const data = JSON.parse(res.body);
        console.log(data);
}

getWeather();