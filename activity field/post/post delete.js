// PostItem.js
import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PostItem;
