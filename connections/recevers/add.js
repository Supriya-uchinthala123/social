// ConnectionAdd.js
import React, { useState } from 'react';
import axios from 'axios';

const ConnectionAdd = () => {
  const [receiverName, setReceiverName] = useState('');

  const handleAddConnection = () => {
    // Send a request to add a new connection
    axios.post('/api/connections', { receiverName })
      .then(response => console.log('Connection added successfully:', response.data))
      .catch(error => console.error('Error adding connection:', error));
  };

  return (
    <div>
      <h2>Add Connection</h2>
      <input
        type="text"
        placeholder="Receiver's Name"
        value={receiverName}
        onChange={e => setReceiverName(e.target.value)}
      />
      <button onClick={handleAddConnection}>Add Connection</button>
    </div>
  );
};

export default ConnectionAdd;
