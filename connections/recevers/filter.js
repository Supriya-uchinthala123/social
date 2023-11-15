// ConnectionList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConnectionList = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Fetch connections from the API
    axios.get('/api/connections')
      .then(response => setConnections(response.data))
      .catch(error => console.error('Error fetching connections:', error));
  }, []);

  return (
    <div>
      <h2>Connection List</h2>
      <ul>
        {connections.map(connection => (
          <li key={connection._id}>{connection.receiverName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectionList;
