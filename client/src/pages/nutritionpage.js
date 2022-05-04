import React from "react";
import SearchFood from "./searchfood";
import { useState } from "react";
import Nutrition from "./nutritiondeatails";
//import axios from 'axios';

const FindFood = () => {
  const [nutrtion, setNutrition] = useState(null);

  const getFoodNutrition = (e) => {
    e.preventDefault();
    let food = e.target.elements.food.value;
    console.log('food: ', food);
    fetch(`/api/nutrition?food=${food}`, {
    })
      .then((response) => response.json())
      .then((data) => {
        setNutrition(data);
        console.log('Food info here', data);
      })
      .catch(err => console.error(err));
  }

  return (

    <div className="HomeTitle">
      <h1 className="HomeTitle">Git healthy Nutrition Page</h1>
      <SearchFood getFoodNutrition={getFoodNutrition} />
      <Nutrition nutrtion={nutrtion} />
      <div>
      </div>
    </div>
  )
}

export default FindFood;