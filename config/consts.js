// chat commands

const CMD_TEXT = {
  myWeather: 'Check my location weather',
  otherWeather: 'Check other location weather',
  menu: 'Menu',
};

module.exports = {
  URL_API_WEATHER: 'https://api.open-meteo.com/v1/forecast',
  URL_API_GEOCODER: 'https://nominatim.openstreetmap.org/search',
  CMD_TEXT,
};
