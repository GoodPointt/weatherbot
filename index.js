const app = require('./app');

const schedule = require('node-schedule');
const axios = require('axios');
const mongoose = require('mongoose');
const { setupBot } = require('./bot');

mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.DB_TOKEN, {
    dbName: 'db-weatherbot',
  })
  .then(() => {
    app.listen(process.env.DEV_PORT, () => {
      console.log(
        `🛠️  Server is up and ready on port: ${process.env.DEV_PORT}`
      );
    });
  })
  .then(() => console.log('🌐 Database connected successfully'))
  .catch((error) => {
    console.log('⚠️ Database conection failed:', error);
    process.exit(1);
  });

setupBot()
  .launch()
  .then(() => {
    console.log('🤖 Bot connected successfully');
  })
  .catch((error) => {
    console.log('⚠️ Bot conection failed:', error);
    process.exit(1);
  });

const job = schedule.scheduleJob('*/14 * * * *', async () => {
  try {
    const response = await axios.get(process.env.REQ_URL);
    if (response.status === 200) {
      console.log('Health checked - ', response.data[0].status);
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
