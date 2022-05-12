import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";



export default function MealTime (props) {
 

const {calories, food } = props;


const [mealcourse, SetMeal] = useState('');
const [data, setData] = useState([]);
const navigate = useNavigate();

useEffect(() => {
  fetch('/api/userview/all')
     .then((response) => response.json())
      .then(data => {
          setData(data);
      }

      )
     
}, []);

// const handleChange = (e) => {
//   SetMeal(e.currentTarget.value);
//   const dailymeal = { foodeaten:food, calories:calories, mealcourse:mealeaten, userid};
//   fetch('http://localhost:3000/api/setmeals', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(dailymeal)
//   }).then(() => {
//     navigate('/api/userview');
//   })
// }



const handleChange = (e) => {
  SetMeal(e.target.value)
  const dailymeal = { foodeaten:food, calories:calories, mealcourse:mealcourse};
  fetch('http://localhost:3000/api/setmeals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dailymeal)
    }).then((response) => {
      return response.json()
  }).then(() => {
    navigate('/api/userview');
  })
}





  return (
    
    <div>
      <div>
            {JSON.stringify(data)}
        </div>
    <form onClick={handleChange}>
     <input 
     type="radio" 
     className="mealcourse" 
     value='Breakfast'
    //  checked={mealeaten === 'Breakfast'}
     onClick={handleChange}
    >
     </input>
     <label>Breakfast</label><br></br>
     <input 
     type="radio" 
     className="mealcourse" 
     value='Lunch'
    //  checked={mealeaten === 'Lunch'}
     onClick={handleChange}
     >
     </input>
     <label>Lunch</label><br></br>
     <input 
     type="radio"
     className="mealcourse"
     value='Dinner'
    //  checked={mealeaten === 'Dinner'}
     onClick={handleChange}>
     </input>
     <label>Dinner</label><br></br>
     <input 
     type="radio"
     className="mealcourse" 
    //  checked={mealeaten === 'Snacks'}
     value='Snacks'
     onClick={handleChange}
     >
     </input>
     <label>Snack</label><br></br>
     </form>
     <button type="submit">Save Meal</button>
 
      </div>

       
      );
    }
    