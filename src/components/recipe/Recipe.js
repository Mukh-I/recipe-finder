import React, { useEffect, useState, useContext } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { dispatchContext } from "../contexts/recipe.context";

import "./recipe.styles.scss";

const Recipe = ({ match }) => {
  const [recipe, setRecipe] = useState([]);
  const API_ID = "e05d8bf6";
  const API_KEY = "25aa1c5b1362ae597a674c01785f99be";

  const dispatch = useContext(dispatchContext);

  const handleAddToFavRecipes = () => {
    const id = match.params.id;
    const savedRecipe = { ...recipe[0], id };

    dispatch({ type: "ADD", savedRecipe });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${match.params.id}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const recipe = await res.json();
      setRecipe(recipe);
    };
    fetchData();
  }, [match]);

  return (
    <div style={{ height: "100%", marginBottom: "2rem" }}>
      <Container maxWidth="md">
        {recipe.length > 0 && (
          <div>
            <h1 style={{ fontWeight: 300 }}>{recipe[0].label} </h1>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Button
                  onClick={handleAddToFavRecipes}
                  size="small"
                  color="secondary"
                >
                  Save TO FAVOURITES
                </Button>
                <div className="recipe-img-container">
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={recipe[0].image}
                    alt={recipe[0].label}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="recipe-cal">
                  <p>Calories {recipe[0].calories.toFixed(1)}Kcal</p>
                </div>
                <div className="ingredients-heading">
                  <h3>Ingredients</h3>
                </div>
                <ul className="recipe-ingredients">
                  {recipe[0].ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}.</li>
                  ))}
                </ul>
              </Grid>

              <Grid item xs={12} md={12}>
                <p>
                  For directions,{" "}
                  <a href={recipe[0].url} target="blank">
                    Click here
                  </a>
                </p>
              </Grid>
            </Grid>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Recipe;
