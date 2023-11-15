// api/pages/:pageId/statuses.js

const express = require('express');
const router = express.Router();

const statuses = {};

router.get('/:pageId/statuses', (req, res) => {
  const { pageId } = req.params;
  const pageStatuses = statuses[pageId] || [];
  res.json(pageStatuses);
});

router.post('/:pageId/statuses', (req, res) => {
  const { pageId } = req.params;
  const { content } = req.body;

  // Add the status to the list
  statuses[pageId] = [...(statuses[pageId] || []), { statusId: Date.now(), content }];

  res.json({ message: 'Status posted successfully' });
});

module.exports = router;
