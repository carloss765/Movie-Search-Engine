import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center mb-8">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movie..."
          className="px-4 py-2 w-64 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300 border-2 bg-gray-700"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
