const { mainMenu } = require('../utils/buttons');

const start = (ctx) =>
  ctx.reply(
    `👋Hello, ${ctx.from.first_name}! 
  \nI am a  🌦️WeatherBot!`,
    {
      disable_web_page_preview: true,
      parse_mode: 'HTML',
      ...mainMenu,
    }
  );

const backMenu = (ctx) =>
  ctx.reply('You are into menu now', {
    ...mainMenu,
  });

//entrace command for Base scene
const startWeather = (ctx) => {
  return ctx.scene.enter('weather');
};

module.exports = {
  start,
  backMenu,
  startWeather,
};
