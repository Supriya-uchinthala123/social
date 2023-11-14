// ReactionButton.js
import React from 'react';

const ReactionButton = ({ onReact }) => {
  return (
    <button onClick={onReact}>
      Like
    </button>
  );
};

export default ReactionButton;
