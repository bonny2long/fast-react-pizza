import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    // Navigate to the order page with the query as the order ID
    navigate(`/order/${query}`);
    setQuery(""); // Reset the query input after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order by ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-y2- w-28 rounded-full bg-yellow-100 px-4 text-sm transition-all placeholder:text-stone-500 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}
