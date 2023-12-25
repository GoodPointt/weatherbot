const { Scene, Scenes } = require('telegraf');
const { backMenuBtnAndLocation } = require('../utils/buttons');
const { getWeatherLocationCoord } = require('../services/getWeatherLocation');
const { CMD_TEXT } = require('../config/consts');
const { handleWeatherCode } = require('../utils/handeWeatherCode');
const { backMenu } = require('./comand');

const weatherScene = new Scenes.BaseScene('weather');

weatherScene.enter((ctx) =>
  ctx.reply('Send me your location 🌍', { ...backMenuBtnAndLocation })
);

weatherScene.on('location', async (ctx) => {
  try {
    const msg = ctx.message;
    ctx.reply('Looking for weather info...');

    const { latitude, longitude } = msg.location;

    const data = await getWeatherLocationCoord({ latitude, longitude });

    ctx.reply(
      `🏡 ${data.timezone}
      \n${handleWeatherCode(data.current_weather.weathercode)}
      \n🌡️ Temperature: ${data.current_weather.temperature} ${
        data.hourly_units.temperature_2m
      }
      \n💨 Wind: ${data.current_weather.windspeed} ${
        data.hourly_units.windspeed_10m
      }`
    );
  } catch (error) {
    console.log(error);
    ctx.reply('😒Oops! Something go wrong. Please try again.');
  }
});

weatherScene.hears(CMD_TEXT.menu, (ctx) => {
  ctx.scene.leave();
  return backMenu(ctx);
});

module.exports = {
  weatherScene,
};
