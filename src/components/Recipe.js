import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, dishType, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.heading}>{title}</h1>
      <ol className={style.p1}>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol>
      <p>{calories} calories</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
