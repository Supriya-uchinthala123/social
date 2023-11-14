// ConnectionButton.jsx
import React from 'react';
import axios from 'axios';

const ConnectionButton = ({ senderId, receiverId }) => {
  const handleConnect = () => {
    // Send connection request
    axios.post('/api/connect', { senderId, receiverId })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <button onClick={handleConnect}>Connect</button>
  );
};

export default ConnectionButton;
