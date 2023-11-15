// ReactionListContainer.js
import React, { useState, useEffect } from 'react';
import ReactionList from './ReactionList';
import ReactionSearch from './ReactionSearch';
import { getFilteredReactions } from '../api/reactions';

const ReactionListContainer = () => {
  const [filteredReactions, setFilteredReactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch filtered reactions from the server when the component mounts or when search term changes
    getFilteredReactions(searchTerm).then((data) => setFilteredReactions(data));
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <ReactionSearch onSearch={handleSearch} />
      <ReactionList reactions={filteredReactions} />
    </div>
  );
};

export default ReactionListContainer;
