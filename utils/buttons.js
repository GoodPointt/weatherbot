const { Markup } = require('telegraf');
const { CMD_TEXT } = require('../config/consts');

const mainMenu = Markup.keyboard([
  [CMD_TEXT.myWeather],
  // [CMD_TEXT.otherWeather],
]).resize();

const backMenuBtn = Markup.keyboard([CMD_TEXT.menu]).resize();

const backMenuBtnAndLocation = Markup.keyboard([
  Markup.button.locationRequest('🌍Share location'),
  Markup.button.text(CMD_TEXT.menu),
]).resize();

module.exports = {
  mainMenu,
  backMenuBtn,
  backMenuBtnAndLocation,
};
