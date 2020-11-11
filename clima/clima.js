


const axios = require('axios');



const getClima = async(lat, lng) => {

    const key = '30c30cc091dce996bf0cff426710850a';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`);

    return (`${resp.data.main.temp}°C`);
}

module.exports = {
    getClima
}