// src/components/SearchBar.jsx

import React, { useState, useEffect } from 'react';

const SearchBar = ({ partners, setFilteredPartners }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setFilteredPartners(
      partners.filter(partner =>
        partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        partner.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, partners, setFilteredPartners]);

  return (
    <input
      type="text"
      placeholder="Search by title or description..."
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      className='search-bar'
    />
  );
};

export default SearchBar;
