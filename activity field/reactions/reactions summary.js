// ReactionSummary.js
import React from 'react';

const ReactionSummary = ({ reactionCount }) => {
  return (
    <div>
      <h4>Reaction Summary:</h4>
      <p>{reactionCount} Likes</p>
    </div>
  );
};

export default ReactionSummary;
