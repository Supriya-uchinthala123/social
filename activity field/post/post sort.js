// PostListContainer.js
import React, { useState, useEffect } from 'react';
import PostList from './PostList';
import PostSearch from './PostSearch';
import { getFilteredPosts } from '../api/posts';

const PostListContainer = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch filtered posts from the server when the component mounts or when search term changes
    getFilteredPosts(searchTerm).then((data) => setFilteredPosts(data));
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <PostSearch onSearch={handleSearch} />
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default PostListContainer;
