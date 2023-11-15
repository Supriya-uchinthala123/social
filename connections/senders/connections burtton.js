// Assuming you have already set up Express and MongoDB

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define mongoose schema and model for the connection table
const connectionSchema = new mongoose.Schema({
  senderId: String,
  receiverId: String,
  status: String,
  time: { type: Date, default: Date.now },
});

const Connection = mongoose.model('Connection', connectionSchema);

// Express API to handle friend requests
app.post('/api/sendFriendRequest', async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    const newConnection = new Connection({
      senderId,
      receiverId,
      status: 'pending',
    });

    await newConnection.save();
    res.status(201).send('Friend request sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Express API to get friend requests for a user
app.get('/api/getFriendRequests/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const requests = await Connection.find({
      receiverId: userId,
      status: 'pending',
    });

    res.status(200).json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Add more APIs as needed for friend acceptance, rejection, friends list, etc.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
