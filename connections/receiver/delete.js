const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path accordingly

// DELETE endpoint to delete a receiver
router.delete('/delete-receiver/:receiverId', async (req, res) => {
  const { receiverId } = req.params;

  try {
    // Check if the receiver exists
    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return res.status(404).json({ error: 'Receiver not found' });
    }

    // Perform the deletion
    await User.findByIdAndDelete(receiverId);

    res.json({ message: 'Receiver deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
