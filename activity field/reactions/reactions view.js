// ReactionList.js
import React, { useState, useEffect } from 'react';
import ReactionItem from './ReactionItem';
import { getReactions } from '../api/reactions';

const ReactionList = () => {
  const [reactions, setReactions] = useState([]);

  useEffect(() => {
    // Fetch reactions from the server when the component mounts
    getReactions().then((data) => setReactions(data));
  }, []);

  return (
    <div>
      <h2>Reaction List</h2>
      {reactions.map((reaction) => (
        <ReactionItem key={reaction._id} reaction={reaction} />
      ))}
    </div>
  );
};

export default ReactionList;
