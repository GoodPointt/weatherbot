const { Telegraf, session, Scenes } = require('telegraf');
const { start, backMenu, startWeather } = require('./controllers/comand');
const { CMD_TEXT } = require('./config/consts');
const { weatherScene } = require('./controllers/weatherScene');

const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Scenes.Stage([weatherScene]);

const setupBot = () => {
  bot.use(session({ collectionName: 'sessions' }));
  bot.use(stage.middleware());

  bot.use((ctx, next) => {
    console.log(ctx.from);

    return next();
  });
  bot.start(start);
  console.log('🤖 Bot start success');
  bot.hears(CMD_TEXT.menu, backMenu);
  bot.hears(CMD_TEXT.myWeather, startWeather);
  return bot;
};

module.exports = {
  setupBot,
};
