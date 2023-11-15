const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

// Define MongoDB schema and model for messages
const messageSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// API endpoint to send a message
app.post('/api/send-message', async (req, res) => {
  const { sender, recipient, content } = req.body;

  try {
    const newMessage = new Message({ sender, recipient, content });
    await newMessage.save();
    res.json({ success: true, message: 'Message sent successfully' });
