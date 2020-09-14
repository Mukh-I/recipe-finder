import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Recipes from "../../components/recipes/Recipes";
import Error from "../../components/error/Error";

import "./home-page.styles.scss";

const HomePage = () => {
  const initialData = () => JSON.parse(localStorage.getItem("recipes")) || [];
  const [err, setErr] = useState("");
  const [recipes, setRecipes] = useState(initialData);
  useEffect(() => {
    if (recipes.length > 0) return;
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.edamam.com/search?q=pasta&app_id=e05d8bf6&app_key=25aa1c5b1362ae597a674c01785f99be`
        );
        const data = await res.json();
        setRecipes(data.hits);
      } catch (err) {
        setErr(err.message);
      }
    };
    localStorage.setItem("recipes", JSON.stringify(recipes));
    fetchData();
  }, [recipes]);
  return (
    <div>
      <div className="home-page">
        <div className="home-page__cover">
          <div className="home-page__content-wrapper">
            <h3 className="home-page__title">Search your favourite recipes</h3>
            <p style={{ color: "white" }}>
              Finding your favourite recipes made simple!!
            </p>
            <Link className="home-page__cta" to="/search">
              Search
            </Link>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main__title-container">
          <h3 className="main__title">Popular recipes</h3>
          <Container maxWidth="md">
            {err && <Error err={err} />}
            {recipes.length > 0 && <Recipes recipes={recipes} />}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
