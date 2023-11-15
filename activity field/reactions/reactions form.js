// ReactionForm.js
import React, { useState } from 'react';

const ReactionForm = ({ onAddReaction }) => {
  const [likes, setLikes] = useState(0);

  const handleAddReaction = () => {
    const newReaction = {
      likes,
      when: new Date().toISOString(),
      // Add any other fields as needed
    };

    // Call the parent component's function to add the reaction
    onAddReaction(newReaction);
  };

  return (
    <div>
      <label htmlFor="likes">Likes:</label>
      <input
        type="number"
        id="likes"
        value={likes}
        onChange={(e) => setLikes(e.target.value)}
      />
      <button onClick={handleAddReaction}>Add Reaction</button>
    </div>
  );
};

export default ReactionForm;
