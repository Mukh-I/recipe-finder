import React, { useReducer, createContext } from "react";

import favRecipeReducer from "../reducers/FavRecipeReducer";

export const RecipeContext = createContext();
export const dispatchContext = createContext();

export const RecipeProvider = ({ children }) => {
  const INITIAL_STATE = {
    favRecipes: JSON.parse(localStorage.getItem("favRecipes")) || [],
    isOpen: false,
  };
  const [state, dispatch] = useReducer(favRecipeReducer, INITIAL_STATE);

  localStorage.setItem("favRecipes", JSON.stringify(state.favRecipes));
  return (
    <RecipeContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </RecipeContext.Provider>
  );
};
