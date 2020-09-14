import { checkforDuplicates } from "../../utils/utils";

const favRecipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        favRecipes: checkforDuplicates(state.favRecipes, {
          ...action.savedRecipe,
        })
          ? [...state.favRecipes]
          : [...state.favRecipes, { ...action.savedRecipe }],
      };
    case "REMOVE":
      return {
        ...state,
        favRecipes: state.favRecipes.filter(
          (recipe) => recipe.id !== action.id
        ),
      };

    case "TOGGLE":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default favRecipeReducer;
