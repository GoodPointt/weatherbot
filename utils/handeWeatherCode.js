const weatherCodes = {
  0: '☀️ Clear sky',
  1: '🌤️ Mainly clear',
  2: '⛅ Partly cloudy',
  3: '☁️ Overcast',
  45: '🌫️ Fog',
  48: '🌫️ Depositing rime fog',
  51: '🌧️ Drizzle: Light intensity',
  53: '🌧️ Drizzle: Moderate intensity',
  55: '🌧️ Drizzle dense intensity',
  56: '🌧️ Freezing Drizzle: light intensity',
  57: '🌧️ Freezing Drizzle: dense intensity',
  61: '🌧️ Rain: Slight intensity',
  63: '🌧️ Rain: Moderate intensity',
  65: '🌧️ Rain: Heavy intensity',
  66: '🌧️ Freezing Rain: Light intensity',
  67: '🌧️ Freezing Rain: heavy intensity',
  71: '❄️ Snow fall: Slight intensity',
  73: '❄️ Snow fall: moderate intensity',
  75: '❄️ Snow fall: heavy intensity',
  77: '❄️ Snow grains',
  80: '🌧️ Rain showers: Slight',
  81: '🌧️ Rain showers: moderate',
  82: '🌧️ Rain showers: violent',
  85: '❄️ Snow showers slight',
  86: '❄️ Snow showers heavy',
  95: '⛈️ Thunderstorm: Slight or moderate',
  96: '⛈️ Thunderstorm with slight hail',
  99: '⛈️ Thunderstorm with heavy hail',
};

const handleWeatherCode = (code) => {
  return weatherCodes[code];
};

module.exports = { handleWeatherCode };
