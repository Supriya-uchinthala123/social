// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the parent component's function to add the comment
    onAddComment(content);
    // Clear the input field
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="3"
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
