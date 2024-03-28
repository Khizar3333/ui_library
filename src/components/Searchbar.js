import React from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Search term: ${searchTerm}`);
    
  };

  return (
    <form className="flex items-center border border-gray-300 rounded-md">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 text-gray-700 bg-gray-200 focus:outline-none focus:border-blue-500"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit" className="px-4 py-2  text-gray-700">
        <svg
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
