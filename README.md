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
npm i hbs

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
// Tạo biến app: 
const app = express();
- Hiển thị lên localhost: http://localhost:7000 

app.get('/', (req, res) => {
    res.send("Hello World")
})


// Tạo đường dẫn
const path = require("path");

const pathPublic = path.join(__dirname, '../public');
console.log(pathPublic)

// Tạo đường dẫn tới static file
app.use(express.static(pathPublic));


- Tạo port:
const port = 7000;

- app chạy trên môi trường (port):

app.listen(7000, () => {
    console.log(`App run on port 7000`);
});

// 5. Cài đặt template engine bằng hbs:
- Tạo folder views, add template
- Hiển thị ứng dụng lên html bằng cách render

app.get('/', (req, res) => {
    res.render('weather1')
})
 
//6. 