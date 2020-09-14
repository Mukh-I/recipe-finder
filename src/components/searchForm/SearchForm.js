import React, { useState } from "react";

import "./search-form.styles.scss";

const SearchForm = ({ setSearchTerm }) => {
  const [recipeName, setRecipeName] = useState("");

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    setSearchTerm(recipeName);
    setRecipeName("");
  };

  const handleChange = (e) => {
    setRecipeName(e.target.value);
  };

  return (
    <form onSubmit={handleSearchRecipe} className="search-form">
      <input
        type="text"
        placeholder="Search recipes here..."
        onChange={handleChange}
        value={recipeName}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default React.memo(SearchForm);
