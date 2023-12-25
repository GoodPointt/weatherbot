const { Health } = require('../models/health');

const healthCheck = async (req, res) => {
  const health = await Health.find();

  res.json(health);
};

module.exports = healthCheck;
