const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4af47e687a528125d5ecca79d3b98c3b&units=metric`
    );

    return resp.data.main.temp;
};

module.exports = {
    getClima,
};