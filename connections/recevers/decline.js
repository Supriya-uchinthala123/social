// connectionRoutes.js
const express = require('express');
const router = express.Router();
const connectionController = require('../controllers/connectionController');

// Get all connections
router.get('/connections', connectionController.getConnections);

// Add a new connection
router.post('/connections', connectionController.addConnection);

module.exports = router;
