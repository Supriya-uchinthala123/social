// friends.js
const express = require('express');
const router = express.Router();

// Assuming you have a MongoDB model named 'Friend'
const Friend = require('../models/Friend');

// API endpoint: GET /api/friends
router.get('/friends', async (req, res) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (error) {
    console.error('Error fetching friends:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
