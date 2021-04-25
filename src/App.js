import "./App.css";
import "./components/styles.css";
import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";

const App = () => {
  const APP_ID = "b21ec1fb";
  const APP_KEY = "a5af5f9946565d9852239362a3b8e01d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const LINK = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(LINK);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          {" "}
          Search{" "}
        </button>
      </form>
      <div className="recipes">
        {recipes.map((food) => (
          <Recipe
            key={food.recipe.image}
            title={food.recipe.label}
            calories={food.recipe.calories}
            image={food.recipe.image}
            dishType={food.recipe.dishType}
            ingredients={food.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
