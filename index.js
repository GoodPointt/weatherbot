require('dotenv').config({ path: './config/.env' });

const mongoose = require('mongoose');
const { setupBot } = require('./bot');

(async function () {
  try {
    await mongoose.connect(process.env.DB_TOKEN, {
      // useUnifiedTopology: true,
      // useNewUrlParse: true,
      dbName: 'db-weatherbot',
    });

    console.log('🌐 Database connect success');

    await setupBot().launch();

    // const bot = setupBot();
    // await bot.launch()
  } catch (error) {
    console.log('❌ ERROR!!', error);
  }
})();
