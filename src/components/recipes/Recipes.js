import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import RecipeCard from "../recipeCard/RecipeCard";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Recipes = ({ recipes }) => {
  const classes = useStyles();

  const recipe = recipes.map((recipe) => (
    <RecipeCard
      key={recipe.recipe.uri.split("_")[1]}
      id={recipe.recipe.uri.split("_")[1]}
      {...recipe}
    />
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {recipe}
      </Grid>
    </div>
  );
};

export default React.memo(Recipes);
