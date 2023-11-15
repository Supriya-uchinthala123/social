// SenderList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SenderList = () => {
  const [senders, setSenders] = useState([]);

  useEffect(() => {
    // Fetch senders from the server
    axios.get('/api/senders')
      .then(response => setSenders(response.data))
      .catch(error => console.error('Error fetching senders:', error));
  }, []);

  return (
    <div>
      <h2>Sender's List</h2>
      <ul>
        {senders.map(sender => (
          <li key={sender.id}>{sender.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SenderList;
