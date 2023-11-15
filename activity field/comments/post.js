// Post.js
import React, { useState } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const Post = ({ post }) => {
  const [comments, setComments] = useState(post.comments);

  const handleAddComment = (newComment) => {
    // Update the comments locally
    setComments([...comments, newComment]);

    // You would also make an API request to update comments in the database
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <CommentList comments={comments} />
      <CommentForm postId={post._id} onAddComment={handleAddComment} />
    </div>
  );
};

export default Post;
