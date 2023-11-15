// FriendRequests.js
import React from 'react';

const FriendRequests = ({ requests }) => {
  return (
    <div>
      <h2>Friend Requests</h2>
      <ul>
        {requests.map(request => (
          <li key={request.senderId}>
            {request.senderName} wants to be your friend
            {/* Add accept and reject buttons as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendRequests;
