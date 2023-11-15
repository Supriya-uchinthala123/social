// server/src/routes/api.js
const express = require('express');
const router = express.Router();
const { ConnectionModel } = require('../models/connection'); // Define your MongoDB model

// Get sender data
router.get('/sender-data', async (req, res) => {
  try {
    const senderData = await ConnectionModel.find({}, 'senderName');
    res.json(senderData);
  } catch (error) {
    console.error('Error fetching sender data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
