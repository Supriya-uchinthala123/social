// connectionController.js
const Connection = require('../models/Connection'); // Assuming you have a Connection model

const connectionController = {
  getConnections: async (req, res) => {
    try {
      const connections = await Connection.find();
      res.json(connections);
    } catch (error) {
      console.error('Error fetching connections:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addConnection: async (req, res) => {
    const { receiverName } = req.body;

    try {
      const newConnection = new Connection({ receiverName });
      await newConnection.save();
      res.json(newConnection);
    } catch (error) {
      console.error('Error adding connection:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = connectionController;
