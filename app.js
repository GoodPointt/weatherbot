require('dotenv').config();
const express = require('express');
const cors = require('cors');

const healthRouter = require('./routes/api/health');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server erorr' } = err;
  res.status(status).json({ message: message });
});

module.exports = app;
