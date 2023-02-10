import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="inline-flex flex-col justify-center hover:text-gray-500">
      <div className="relative  w-full ">
        <input
          type="text"
          className="p-3 pl-8 w-full rounded text-gray-500 border border-none bg-transparent  focus:bg-gray focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          placeholder="Filter"
          value={search}
          onChange={handleChange}
        />
        <svg
          className="w-5 h-5  text-gray-500 absolute left-1.5 top-3.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
