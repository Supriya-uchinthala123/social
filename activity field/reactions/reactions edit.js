// ReactionForm.js
import React, { useState } from 'react';

const ReactionForm = ({ onSubmit, initialValues }) => {
  const [userId, setUserId] = useState(initialValues.userId || '');
  const [type, setType] = useState(initialValues.type || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ userId, type });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <label>Type:</label>
      <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReactionForm;
