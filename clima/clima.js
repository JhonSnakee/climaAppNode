


const axios = require('axios');



const getClima = async(lat, lng) => {

    const key = '*********************************';

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`);

    return (`${resp.data.main.temp}°C`);
}

module.exports = {
    getClima
}
