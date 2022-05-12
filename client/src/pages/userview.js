import React from 'react';
import { useState, useEffect } from "react";
// import Nutrition from './nutritiondeatails';
// import MealTime from './meals';
// import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import MealTime from './meals';



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

// useEffect(()=>
// {
//   setUserId(usermeals.userid);
//   }
// ,[userid]);
// console.log([userid]);

const handleClick = () => {
  navigate(`/api/nutrition`)
}
return (
  <div className="App">
    <h1>Your Daily Nutrition Summary</h1>
    <h1>{date}</h1>
    <div>
            {/* {JSON.stringify(usermeals)} */}
        </div>
     
    <ul>
    {usermeals.map((meal, index) =>
    <li className='list' key={index}> <br /> 
      <h2>{meal.mealcourse}</h2><br /> {meal.foodeaten}<br /> {meal.calories}<br />
    </li>)}
    </ul>
     <button onClick={handleClick}>Add Meal</button>
    <MealTime usermeals={usermeals.id}/>
  </div>
  
);
}

export default UserView;