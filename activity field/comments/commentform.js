// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ postId, onAddComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      sender: 'Current User', // Replace with the actual user info
      content,
      time: new Date().toISOString(),
    };

    // Call the parent component's function to add the comment
    onAddComment(newComment);

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
