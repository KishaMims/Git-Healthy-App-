import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function MealTime (props) {
 

const {calories, userid, food} = props;


const [mealeaten, SetMeal] = useState('');
const navigate = useNavigate();

 

const handleChange = (e) => {
  SetMeal(e.target.value);
  const dailymeal = { foodeaten:food, calories:calories, mealcourse:mealeaten, userid};
  fetch('http://localhost:3000/api/setmeals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dailymeal)
  }).then(() => {
    navigate('/api/userview');
  })
}







  return (
        <div>
      <form>
       <input 
       type="radio" 
       className="mealcourse" 
       value='Breakfast'
       onClick={handleChange}
       >
       </input>
       <label>Breakfast</label><br></br>
       <input 
       type="radio" 
       className="mealcourse" 
       value='Lunch'
       onClick={handleChange}
       >
       </input>
       <label>Lunch</label><br></br>
       <input 
       type="radio"
       className="mealcourse"
       value='Dinner'
       onClick={handleChange}
       >
       </input>
       <label>Dinner</label><br></br>
       <input 
       type="radio"
       className="mealcourse" 
       value='Snack'
       onClick={handleChange}
       >
       </input>
       <label>Snack</label><br></br>
       </form>
       <button type="submit">Save Meal</button>
   
        </div>
       
      );
    }
    