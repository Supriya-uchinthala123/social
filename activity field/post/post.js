// Post.js
import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.caption}</h3>
      <img src={post.image} alt="Post" />
      <p>{post.time}</p>
      <p>{post.who}</p>
      {/* Add any additional post details here */
    </div>
  );
};

export default Post;
