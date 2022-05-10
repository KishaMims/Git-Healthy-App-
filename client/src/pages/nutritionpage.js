import React from "react";
import SearchFood from "./searchfood";
import { useState } from "react";
import Nutrition from "./nutritiondeatails";



const FindFood = () => {
  const [nutrition, setNutrition] = useState(null);

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
      {/* {JSON.stringify(nutrtion)} */}
      <SearchFood getFoodNutrition={getFoodNutrition} />
      <Nutrition nutrition={nutrition} />
      <div>
      </div>
    </div>
  )
}

export default FindFood;