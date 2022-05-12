import React from 'react';
import { useState, useEffect } from "react";
// import Nutrition from './nutritiondeatails';
import MealTime from './meals';
// import moment from 'moment';


const UserView = ()=> {
  const [usermeals, setUserMeals] = useState([]);
  // const [users, setUser] = useState(undefined);
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  // const [userid, setUserId] = useState([]);



  //get request needed to get the user id and current day meals 
  useEffect(() => {
    fetch('/api/userview')
       .then((response) => response.json())
        .then(usermeals => {
            setUserMeals(usermeals);
            // setUserId(usermeals.userid);
        }

        )
       
}, []);

// useEffect(()=>
// {
//   setUserId(usermeals.userid);
//   }
// ,[userid]);
// console.log([userid]);


return (
  <div className="App">
    <h1>Your Daily Nutrition Summary</h1>
    <h1>{date}</h1>
    <div>
            {JSON.stringify(usermeals)}
        </div>
    {/* <ul>
    {usermeals.map((meal, index) =>
    <li className='list' key={index}> <br /> 
      <h2>{meal.foodeaten}</h2><br /> {meal.calories}<br /> {meal.course} <br /> <br />Added on: {moment(meal.addedon).format('MM/DD/YYYY')} <></><br />
    </li>)}
    </ul> */}
    <MealTime userid={usermeals.userid}/>
  </div>
  
);
}

export default UserView;