import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Badge from "@material-ui/core/Badge";

import FavRecipeDropdown from "../favRecipeDropdown/FavRecipeDropdown";
import { RecipeContext, dispatchContext } from "../contexts/recipe.context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Great Vibes",
  },
  link: {
    color: "white",
    fontSize: "1.1rem",
    textDecoration: "none",
    textTransform: "uppercase",
    marginRight: 10,
  },
  fav: { fontSize: 28, marginLeft: 5, cursor: "pointer" },
}));

const Header = () => {
  const classes = useStyles();
  const state = useContext(RecipeContext);
  const dispatch = useContext(dispatchContext);

  const handleToggle = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar style={{ width: "95%", margin: "0 auto" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.7rem",
              }}
              to="/"
            >
              Recipe Finder
            </NavLink>
          </Typography>
          <NavLink className={classes.link} to="/search">
            Search
          </NavLink>
          <p onClick={handleToggle}>
            {state.favRecipes.length > 0 ? (
              <Badge badgeContent={state.favRecipes.length} color="primary">
                <FavoriteIcon className={classes.fav} />
              </Badge>
            ) : (
              <FavoriteIcon className={classes.fav} />
            )}
          </p>
        </Toolbar>
      </AppBar>
      {state.isOpen && <FavRecipeDropdown />}
    </div>
  );
};

export default Header;
