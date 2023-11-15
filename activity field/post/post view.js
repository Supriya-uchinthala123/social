// PostList.js
import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';
import { getPosts } from '../api/posts';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the server when the component mounts
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Post List</h2>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
