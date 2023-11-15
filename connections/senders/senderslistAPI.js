// senderController.js
const Sender = require('../models/sender');

exports.getSenders = async (req, res) => {
  try {
    const senders = await Sender.find();
    res.json(senders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
