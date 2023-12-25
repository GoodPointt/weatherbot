const express = require('express');
const healthCheck = require('../../controllers/health');

const router = express.Router();

router.get('/', healthCheck);

module.exports = router;
