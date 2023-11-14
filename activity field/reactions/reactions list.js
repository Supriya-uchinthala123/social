// ReactionList.js
import React from 'react';

const ReactionList = ({ reactions }) => {
  return (
    <div>
      <h4>Reactions:</h4>
      <ul>
        {reactions.map(reaction => (
          <li key={reaction._id}>
            {reaction.likes} Likes on {reaction.when}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactionList;
