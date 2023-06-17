# Nodejs_WeatherApp
# Tạo ứng dụng WeatherApp tìm thông tin thời tiết của 1 vùng đã chọn

// Lấy API của Weather:
https://weatherstack.com
 
- Your API access key: 74bc2df6acd3ce0ac552f5ce37cd418c

// 1. Khởi tạo thư mục ứng dụng Weather App:
- Khởi tạo thư mục
npm init 
- Khởi tạo thư viện
npm i async-request
npm i nodemon 
npm i express

// 2. Làm việc với file package để chỉnh sửa cấu hình:

package.json > script (add):
    "start": "node app/app.js
    "dev": "nodemon app/app.js"

// 3. Lấy thông tin thời tiết:
- Tạo yêu cầu:
const asyncRequest = require("async-request");
- Tạo hàm lấy thông tin thời tiết:
const getWeather = () => {
    const url = "http://api.weatherstack.com/current?access_key=74bc2df6acd3ce0ac552f5ce37cd418c&query=New%20York";

    const res = await asyncRequest(url);
    const weather = {


    }
}


// 4. Dựng server với express:
- Khởi tạo thư viện:  
const express = require('express');
// Tạo biến app 
const app = express();
- Hiển thị lên localhost: http://localhost:7000
app.get('/', (req, res) => {
    res.send("Hello World")
})
- app chạy trên môi trường:
app.listen(7000, () => {
    console.log(`App run on port 7000`);
});
