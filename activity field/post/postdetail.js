// PostDetail.js
import React from 'react';
import CommentList from './CommentList'; // You can reuse the CommentList component

const PostDetail = ({ post, comments }) => {
  return (
    <div>
      <h2>{post.caption}</h2>
      <img src={post.image} alt="Post" />
      <p>{post.time}</p>
      <p>{post.who}</p>
      {/* Add any additional post details here */}
      <CommentList comments={comments} />
      {/* Add a CommentForm component if needed */}
    </div>
  );
};

export default PostDetail;
