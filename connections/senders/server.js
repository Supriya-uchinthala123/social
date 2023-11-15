const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/social_network', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Connection schema
const connectionSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  status: String,
  time: { type: Date, default: Date.now }
});

const Connection = mongoose.model('Connection', connectionSchema);

// API to get user connections
app.get('/api/connections/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const connections = await Connection.find({ $or: [{ sender: userId }, { receiver: userId }] });
    res.json(connections);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to send a connection request
app.post('/api/connect', async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const newConnection = new Connection({
      sender: senderId,
      receiver: receiverId,
      status: 'pending'
    });
    await newConnection.save();
    res.json({ message: 'Connection request sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
