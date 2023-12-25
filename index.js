require('dotenv').config();

const schedule = require('node-schedule');
const axios = require('axios');
const mongoose = require('mongoose');
const { setupBot } = require('./bot');

(async function () {
  try {
    await mongoose.connect(process.env.DB_TOKEN, {
      dbName: 'db-weatherbot',
    });

    console.log('🌐 Database connect success');

    await setupBot().launch();
  } catch (error) {
    console.log('❌ ERROR!!', error);
  }
})();

const job = schedule.scheduleJob('*/14 * * * *', async () => {
  try {
    const response = await axios.get(REQ_URL);
    if (response.status === 200) {
      console.log('✅ GET request to API successful');
    } else {
      console.error(
        '❌ GET request to API failed:',
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error('❌ Error making GET request:', error.message);
  }
});
