// UserProfile.js
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default UserProfile;
