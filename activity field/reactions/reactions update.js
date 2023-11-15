// ReactionItem.js
import React from 'react';

const ReactionItem = ({ reaction }) => {
  return (
    <div>
      <p>{reaction.userId}</p>
      <p>{reaction.type}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ReactionItem;
