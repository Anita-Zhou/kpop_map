const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getEventsByCity);
router.post('/', eventController.createEvent);

module.exports = router;
