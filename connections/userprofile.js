// UserProfile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Fetch user connections
    axios.get(`/api/connections/${userId}`)
      .then(response => setConnections(response.data))
      .catch(error => console.error(error));
  }, [userId]);

  return (
    <div>
      <h2>User Profile</h2>
      <ul>
        {connections.map(connection => (
          <li key={connection._id}>
            {connection.sender} - {connection.receiver} ({connection.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
