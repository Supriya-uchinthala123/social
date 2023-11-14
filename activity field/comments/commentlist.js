// CommentList.js
import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment._id}>
          <strong>{comment.sender}</strong>: {comment.content}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
