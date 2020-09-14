import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import SearchRecipes from "./components/searchRecipes/SearchRecipes";
import Recipe from "./components/recipe/Recipe";
import Footer from "./components/footer/Footer";

import { RecipeProvider } from "./components/contexts/recipe.context";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <RecipeProvider>
        <Header />
        <div style={{ minHeight: "calc(100vh - 70px)", marginBottom: "2rem" }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={SearchRecipes} />
            <Route
              exact
              path="/recipe/:id"
              render={(props) => <Recipe {...props} />}
            />
          </Switch>
        </div>
        <Footer />
      </RecipeProvider>
    </div>
  );
};

export default App;
