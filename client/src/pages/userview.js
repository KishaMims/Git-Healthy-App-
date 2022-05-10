import React from 'react';
import { useState, useEffect } from "react";


const UserView = ()=> {
const [user_meals, setUserMeals] = useState([]);
// const [user, setUser] = useState(undefined);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



  useEffect(() => {
    fetch('http://localhost:3001/api/users/nutrition')
       .then((response) => response.json())
       //.then(response => response.text())
        .then(user_meals => {
            setUserMeals(user_meals);
        }

        )
       
}, []);

   
  return (
    <div className="App">
      <h1>Your Daily Nutrition Summary</h1>
      <h1>{date}</h1>
      <>{JSON.stringify(user_meals)}</>
    </div>
  );
}


export default UserView;