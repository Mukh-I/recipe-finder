import React, { useState, useEffect, useCallback } from "react";
import Container from "@material-ui/core/Container";

import Recipes from "../recipes/Recipes";
import SearchForm from "../searchForm/SearchForm";
import Error from "../error/Error";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import "./search-recipes.styles.scss";

const SearchRecipes = () => {
  const initialData = () =>
    JSON.parse(localStorage.getItem("searchedRecipes")) || [];
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedRecipes, setRecipes] = useState(initialData);

  const searchRecipe = useCallback(async () => {
    setIsLoading(true);
    setRecipes([]);
    try {
      const url = `https://api.edamam.com/search?q=${searchTerm}&app_id=e05d8bf6&app_key=25aa1c5b1362ae597a674c01785f99be`;
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.hits);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setErr(err.message);
    }
  }, [searchTerm]);

  localStorage.setItem("searchedRecipes", JSON.stringify(searchedRecipes));
  useEffect(() => {
    if (!searchTerm) return;
    searchRecipe();
  }, [searchRecipe, searchTerm]);

  return (
    <Container maxWidth="md">
      <SearchForm setSearchTerm={setSearchTerm} />
      {isLoading && <LoadingSpinner />}
      {err && <Error err={err} />}
      {searchedRecipes.length > 0 && <Recipes recipes={searchedRecipes} />}
    </Container>
  );
};

export default SearchRecipes;
