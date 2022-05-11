import React from 'react';
import { useState, useEffect } from "react";
import moment from 'moment';


const UserView = ()=> {
const [usermeals, setUserMeals] = useState([]);
// const [users, setUser] = useState(undefined);
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  useEffect(() => {
    fetch('/api/meals')
       .then((response) => response.json())
        .then(usermeals => {
            setUserMeals(usermeals);
        }
        )
       
}, []);


//   useEffect(() => {
//     fetch('/api/user/meals')
//        .then((response) => response.json())
//         .then(usermeals => {
//             setUserMeals(usermeals);
//         }

//         )
       
// }, []);

   
  return (
    <div className="App">
      <h1>Your Daily Nutrition Summary</h1>
      <h1>{date}</h1>
      <ul>
      {usermeals.map((meal, index) =>
      <li className='list' key={index}> <br /> 
        <h2>{meal.foodeaten}</h2><br /> {meal.calories}<br /> {meal.course} <br /> <br />Added on: {moment(meal.addedon).format('MM/DD/YYYY')} <br />
      </li>)}
      </ul>
    </div>
  );
}


export default UserView;