import React, { useContext } from "react";

import DropdownRecipeCard from "../dropdownRecipeCard/dropdownRecipeCard";
import { RecipeContext } from "../contexts/recipe.context";

import "./fav-recipe-dropdown.styles.scss";

const FavRecipeDropdown = () => {
  const state = useContext(RecipeContext);
  const { favRecipes } = state;
  return (
    <div className="dropdown">
      {favRecipes.map((recipe) => {
        const id = recipe.uri.split("_")[1];
        return <DropdownRecipeCard key={id} id={id} recipe={recipe} />;
      })}
    </div>
  );
};

export default FavRecipeDropdown;
