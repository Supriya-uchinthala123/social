import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (!userProfile) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{userProfile.username}'s Profile</h2>
      <p>Email: {userProfile.email}</p>
      {/* Add more profile information */}
    </div>
  );
};

export default UserProfile;
