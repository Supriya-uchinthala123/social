// server/src/controllers/UserController.js
const User = require('../models/User');

const UserController = {
  getSenderSearchResults: async (req, res) => {
    try {
      // Fetch sender search results from the database
      const results = await User.find(/* your query conditions here */);
      res.json(results);
    } catch (error) {
      console.error('Error fetching sender search results:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = UserController;
