import React from "react";
import { useState } from "react"; 
import RecipeForm from "./recipeform";
import RecipeList from "./recipelist";

function Recipes() {

const [recipes, setRecipes] = useState(null);

const getRecipes = (e) => {
  e.preventDefault();
  let calories = e.target.elements.calories.value;
  console.log(calories);
  // add to request body
  fetch(`/api/recipes/?calories=${calories}`, {
      method: "get",
      headers: {"Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
      setRecipes(data);
      console.log(data);
  })
  .catch((err) => console.error(`Error: ${err}`));
}

  return ( 
    <div className="HomeTitle">
        <h1 className="HomeTitle">Git Healthy Recipes</h1>
        <RecipeForm getRecipes={getRecipes}/>
        <RecipeList recipes={recipes}/>
    </div>
  )
}

export default Recipes;