// friendRequests.js
const express = require('express');
const router = express.Router();

// Assuming you have a MongoDB model named 'FriendRequest'
const FriendRequest = require('../models/FriendRequest');

// API endpoint: GET /api/friend-requests
router.get('/friend-requests', async (req, res) => {
  try {
    const friendRequests = await FriendRequest.find();
    res.json(friendRequests);
  } catch (error) {
    console.error('Error fetching friend requests:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
