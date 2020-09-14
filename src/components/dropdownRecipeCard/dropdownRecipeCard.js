import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

import { dispatchContext } from "../contexts/recipe.context";
import { shortenTitle } from "../../utils/utils";

import "./dropdown-recipe-card.styles.scss";

const DropdownRecipeCard = ({ id, recipe, history }) => {
  const dispatch = useContext(dispatchContext);
  const handleRecipeRoute = () => {
    history.push(`/recipe/${id}`);
  };

  const handleDelete = () => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <div className="dropdown-recipe-card">
      <div className="img-container">
        <img src={recipe.image} alt={recipe.label} />
      </div>
      <div className="heading">
        <Typography style={{ marginBottom: 5, fontWeight: 500 }}>
          {shortenTitle(recipe.label, 15)}
        </Typography>
        <div style={{ display: "flex" }}>
          <Button
            variant="outlined"
            size="small"
            style={{ marginRight: 3 }}
            color="inherit"
            onClick={handleRecipeRoute}
          >
            View recipe
          </Button>
          <Button
            onClick={handleDelete}
            variant="outlined"
            size="small"
            color="secondary"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DropdownRecipeCard);
