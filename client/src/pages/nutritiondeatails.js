import React from "react";
import { useState, useEffect } from 'react';
import MealTime from './meals';

function Nutrition (props) {
  const { nutrition } = props;
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');

useEffect(()=> {
  if(nutrition) {
    setFood(nutrition.items[0].name);
    setCalories(nutrition.items[0].calories);
  }
},[nutrition])

  return (
    <div className='nutrtion_info'>
    {!nutrition ? (<h2 className='checking'>
     {" "}Check your food's nutrition{" "}</h2>) : (
      <p>
         <span>Food:{nutrition.items[0].name}</span>
         <span>Total Grams of Fat:{nutrition.items[0].at_total_g}</span>
         <span>Total Sugar:{nutrition.items[0].sugar_g}</span>
         <span>Total Calories:{nutrition.items[0].calories}</span>
         <span>Total Grams of Protien:{nutrition.items[0].protien_g}</span>
         <span>Total Carbohydrates:{nutrition.items[0].carbohydrates_total_g}</span>
      </p>
     )}
     <MealTime food={food} calories={calories}/> 
    </div>
  )
}

export default Nutrition;
