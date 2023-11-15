import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendList = ({ userId }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch the list of friends for the given user
    const fetchFriends = async () => {
      try {
        const response = await axios.get(`/api/friends/${userId}`);
        setFriends(response.data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchFriends();
  }, [userId]);

  return (
    <div>
      <h2>Your Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
