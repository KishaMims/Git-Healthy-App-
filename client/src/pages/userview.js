import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';




const UserView = ()=> {
  const [usermeals, setUserMeals] = useState([]);
  // const [users, setUser] = useState(undefined);
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  const navigate = useNavigate();
  
  //get request needed to get the user id and current day meals 
  useEffect(() => {
    fetch('/api/userview')
       .then((response) => response.json())
        .then(usermeals => {
            setUserMeals(usermeals);
        }

        )
       
}, []);

const navigateToAddMeal = () => {
  navigate(`/api/nutrition`)
}


let meals = {};

usermeals.forEach((entry) => {
  meals[entry.mealcourse] = meals[entry.mealcourse] || {};
  meals[entry.mealcourse][entry.foodeaten] = Number(entry.calories);
});

return (
  <div className="App">
    <h1>Your Daily Nutrition Summary</h1>
    <h1>{date}</h1>
    {meals.Breakfast &&
  <>
    <h2>Breakfast</h2>
    <ul>
      {
        Object.entries(meals.Breakfast).map((food) => {
          return (<li>{food[0]}: {food[1]}</li>);
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
        Object.entries(meals.Lunch).map((food) => {
          return (<li>{food[0]}: {food[1]}</li>);
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
        Object.entries(meals.Dinner).map((food) => {
          return (<li>{food[0]}: {food[1]}</li>);
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
        Object.entries(meals.Snacks).map((food) => {
          return (<li>{food[0]}: {food[1]}</li>);
        })
      }
    </ul>
  </>

  }
  <button onClick={navigateToAddMeal}>Add Meal</button>
  </div>
);
}

export default UserView;
