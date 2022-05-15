import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import WeeklyMeals from './weeklymeals';



const UserView = () => {
  const [usermeals, setUserMeals] = useState([]);
  // const [users, setUser] = useState(undefined);
  const current = new Date();
  const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
  const navigate = useNavigate();

//function to reload on delete
  const getMeals = () =>{
  fetch('/api/userview')
  .then((response) => response.json())
  .then(usermeals => {
    setUserMeals(usermeals);
  });
};


  //get request needed to get the user id and current day meals 
  useEffect(() => {
    fetch('/api/userview')
      .then((response) => response.json())
      .then(usermeals => {
        setUserMeals(usermeals);
        console.log(usermeals);
      }

      )

  }, []);

//delete request 
  const deleteMeal = (id) => {
    fetch(`http://localhost:3000/api/userview/${id}`, {
      method: 'DELETE'
    }).then((response) => {
          if (response.ok) {
            getMeals();
          }
        },
          (error) => {
            alert(error);
          }
        )
      };


 // link to add meal      
  const navigateToAddMeal = () => {
    navigate(`/api/nutrition`)
  }


  const navigateToWeeklyMeal = () => {
    navigate(`/api/userview/weekly`)
  }


  const meals = {
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snacks: [],
  };

  let totalCalories = 0;

  usermeals.forEach((meal) => {
    meals[meal.mealcourse].push(meal);
    totalCalories += Number(meal.calories);
  });

  //delete function 


  return (
    <div className="App">
      <h1>Your Daily Nutrition Summary</h1>
      <h1>{date}</h1>
      {meals.Breakfast &&
        <>
          <h2>Breakfast</h2>
          <ul>
            {
              meals.Breakfast.map((food) => {
                return (<li id={food.id}> {food.foodeaten} CAL: {food.calories}<button className="delete" onClick={() => deleteMeal(food.id)}>Delete Meal </button></li>);
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
                return (<li key={index} id={food.id}>{food.foodeaten} CAL: {food.calories}<button className="delete" onClick={() => deleteMeal(food.id)}>Delete Meal </button></li>);
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
                return (<li key={index} id={food.id}>{food.foodeaten} CAL: {food.calories}<button className="delete" onClick={() => deleteMeal(food.id)}>Delete Meal </button></li>);
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
                return (<li key={index}id={food.id}>{food.foodeaten} CAL: {food.calories}<button className="delete" onClick={() => deleteMeal(food.id)}>Delete Meal </button></li>);
              })
            }
          </ul>
        </>
      }
      {meals.Calories &&
        <>
        </>
      }
      <h2>Total Calories: </h2>
      {totalCalories}<br />
      <h2> Have you eaten today?</h2>
      <button onClick={navigateToAddMeal}>Add Meal</button><br />
      <br/><button onClick={navigateToWeeklyMeal}>View Week</button>
{/* <WeeklyMeals/> */}
    </div>
  );
}

export default UserView;
