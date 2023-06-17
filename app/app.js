const asyncRequest = require('async-request');

// Dựng server
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
        return {
            isSuccess: false,
            error,
        };
    };
    
}

//getWeather("tokyo");

// Khởi tạo thư viện
const express = require('express');
// Tạo biến app 
const app = express();

// Tạo đường dẫn
const path = require("path");

const pathPublic = path.join(__dirname, '../public');
console.log(pathPublic)

// Tạo đường dẫn tới static file
app.use(express.static(pathPublic));


// Hiển thị lên localhost: http://localhost:7000
app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1> + <a href="">index.js</a>`)
})
// Tạo port 
const port = 7000;
// app chạy trên môi trường:
app.listen(port, () => {
    console.log(`App run on port ${port}`);
});