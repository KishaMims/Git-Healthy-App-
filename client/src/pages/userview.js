import React from 'react';
import { useState, useEffect } from "react";


const UserView = ()=> {
const [usermeals, setUserMeals] = useState([]);
// const [users, setUser] = useState(undefined);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  useEffect(() => {
    fetch('api/meals')
       .then((response) => response.json())
        .then(data => {
            setUserMeals(data.response.usermeals);
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
      <>{JSON.stringify(usermeals)}</>
    </div>
  );
}


export default UserView;