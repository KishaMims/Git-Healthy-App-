import React from 'react';
import { useState, useEffect } from "react";
import moment from "moment";
import _ from 'lodash';
import background from "./userviewbackground.jpg";

function WeeklyMeals( ) {


const [weeklymeals, setWeeklyMeals] = useState([]);

useEffect(() => {
  fetch('/api/userview/weekly')
    .then((response) => response.json())
    .then(weeklymeals => {
      setWeeklyMeals(weeklymeals);
      console.log(weeklymeals);
    }

    )

}, []);

const meals = {
  Breakfast: [],
  Lunch: [],
  Dinner: [],
  Snacks: [],
};


weeklymeals.forEach((meal) => {
  meals[meal.mealcourse].push(meal);
});

// console.log(setSelectedDayRange); 
return (
  <div className='weekly_view'
  style={{ 
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: "895px"
  }}>
    <h1>Prior Week's Meals</h1>
     {meals.Breakfast &&
        <>
          <h2>Breakfast</h2>
          <ul>
            {
              meals.Breakfast.map((food) => {
                return (<li id={food.id}> Eaten on: {moment(food.addedon).format("MMM Do, YYYY")} {_.upperFirst(food.foodeaten)} CAL: {food.calories}</li>);
              })
            }
          </ul>
        </>
      }
       {meals.Lunch &&
        <>
          <h2>Lunch</h2>
          <ul>
            {
              meals.Lunch.map((food,index) => {
                return (<li key={index} id={food.id}> Eaten on: {moment(food.addedon).format("MMM Do, YYYY")} {_.upperFirst(food.foodeaten)} CAL: {food.calories}</li>);
              })
            }
          </ul>
        </>
      }
      {meals.Dinner &&
        <>
          <h2>Dinner</h2>
          <ul>
            {
              meals.Dinner.map((food,index) => {
                return (<li key={index} id={food.id}> Eaten on: {moment(food.addedon).format("MMM Do, YYYY")} {_.upperFirst(food.foodeaten)} CAL: {food.calories}</li>);
              })
            }
          </ul>
        </>
      }
      {meals.Snacks &&
        <>
          <h2>Snacks</h2>
          <ul>
            {
              meals.Snacks.map((food, index) => {
                return (<li key={index}id={food.id}> Eaten on: {moment(food.addedon).format("MMM Do, YYYY")} {_.upperFirst(food.foodeaten)} CAL: {food.calories}</li>);
              })
            }
          </ul>
        </>
      }
      </div>
)
    };



export default WeeklyMeals;