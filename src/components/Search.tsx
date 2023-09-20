import { RiSearchLine } from 'react-icons/ri';
import SearchItem from "~/components/SearchItem";
import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { api } from "~/utils/api";

export default function Search({ setSelectedProduct }) {

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [showDropdown, setShowDropdown] = useState(false);

  const searchQuery = api.category.searchProducts.useQuery({
    searchName: debouncedSearchTerm,
  });
  const searchResults = searchQuery.data || [];

   useEffect(() => {
    if (debouncedSearchTerm) {
      searchQuery.refetch();
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [debouncedSearchTerm, searchQuery.data]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
  };

  const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowDropdown(false);
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 relative">
        <button
          className="flex items-center rounded-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
        >
          <textarea
            className="resize-none overflow-hidden outline-none bg-transparent"
            placeholder="Search..."
            onChange={handleSearchChange}
            value={searchTerm}
          />
          <RiSearchLine size={24} style={{ marginLeft: '8px' }} />
        </button>
        {showDropdown && searchResults.length > 0 && (
          <div
            id="dropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full left-0 mt-2"
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
              {searchResults.map((result, index) => <SearchItem key={index} name={result} onClick={() => handleProductClick(result)} />)}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}