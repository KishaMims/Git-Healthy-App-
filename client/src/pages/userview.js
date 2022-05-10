import React from 'react';


export default function UserView() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  //get request needed to get the user id and current day meals 

  return (
    <div className="App">
      <h1>Your Daily Nutrition Summary</h1>
      <h1>{date}</h1>
    </div>
  );
}
