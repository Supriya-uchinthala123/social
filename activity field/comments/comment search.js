// CommentSearch.js
import React, { useState } from 'react';

const CommentSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Call the parent component's function to perform the search
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search comments..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CommentSearch;
