const axios = require('axios');

const getClima = async(lat, long) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=507a02e9bf0c32a329f091ab07d10d55`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}