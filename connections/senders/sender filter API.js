// server/src/routes/api.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// API endpoint for sender search
router.get('/sender-search', UserController.getSenderSearchResults);

module.exports = router;
