// CommentList.js
import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, onDeleteComment, onUpdateComment }) => {
  return (
    <div>
      {comments.map(comment => (
        <Comment
          key={comment._id}
          comment={comment}
          onDeleteComment={onDeleteComment}
          onUpdateComment={onUpdateComment}
        />
      ))}
    </div>
  );
};

export default CommentList;
