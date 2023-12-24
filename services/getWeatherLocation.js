const { default: axios } = require('axios');
const { URL_API_WEATHER } = require('../config/consts');

const getWeatherLocationCoord = async ({ longitude, latitude }) => {
  const { data } = await axios.get(URL_API_WEATHER, {
    params: {
      latitude,
      longitude,
      hourly: 'temperature_2m,relativehumidity_2m,windspeed_10m',
      current_weather: true,
      timezone: 'auto',
    },
  });
  return data;
};

module.exports = {
  getWeatherLocationCoord,
};
