import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { shortenTitle } from "../../utils/utils";
import { dispatchContext } from "../contexts/recipe.context";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  media: {
    height: 140,
  },
});

const RecipeCard = ({ recipe, id, history }) => {
  const classes = useStyles();
  const dispatch = useContext(dispatchContext);

  const handleAddToFavRecipes = (event) => {
    event.persist();
    const savedRecipe = { ...recipe, id };

    dispatch({ type: "ADD", savedRecipe });
  };

  const handleRecipeRoute = () => {
    history.push(`/recipe/${id}`);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={recipe.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {shortenTitle(recipe.label)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
              reprehenderit.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleRecipeRoute} size="small" color="secondary">
            View recipe
          </Button>
          <IconButton
            onClick={handleAddToFavRecipes}
            aria-label="add to favorites"
          >
            <FavoriteIcon color="secondary" />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default React.memo(withRouter(RecipeCard));
