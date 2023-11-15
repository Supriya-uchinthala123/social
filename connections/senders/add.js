// FriendRequest.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendRequest = ({ userId }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch friend requests for the user from the API
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`/api/friend-requests/${userId}`);
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching friend requests:', error);
      }
    };

    fetchRequests();
  }, [userId]);

  return (
    <div>
      <h2>Friend Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request._id}>{request.senderName}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendRequest;
