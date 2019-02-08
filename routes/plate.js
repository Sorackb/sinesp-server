const express = require('express');
const controller = require('../controllers/plate');

const router = express.Router();

router.get('/search/:plate', controller.search);

module.exports = router;
