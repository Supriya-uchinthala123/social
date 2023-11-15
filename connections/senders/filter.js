// ConnectionTable.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConnectionTable = () => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Fetch connections from the server
    axios.get('/api/connections')
      .then(response => setConnections(response.data))
      .catch(error => console.error('Error fetching connections:', error));
  }, []);

  return (
    <div>
      <h2>Connection Table</h2>
      <ul>
        {connections.map(connection => (
          <li key={connection._id}>{connection.sender} - {connection.receiver}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectionTable;
