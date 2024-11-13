// Header.js
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => (
    <div className="search-header">
        <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
        </div>
    </div>
);

export default SearchBar;
