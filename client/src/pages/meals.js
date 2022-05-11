import React from 'react';
import { useState } from 'react';


export default function MealTime () {
 


// const [food, setFood] = useState('');
// const [calories, setCalories] = useState = ('');
 //const { id } = useParams();
const [mealeaten, SetMeal] = useState('');
// const { data: meals, error } = useFetch(`http://localhost:5000/api/nutrition/${user_id}`);

const handleChange = (e) => {
  SetMeal(e.target.value)
}



// const handleChange = (e) => {
//   SetMeal(e.target.value);
//   const mealeaten = { food_eaten, mealcourse, user_id };
//   fetch('http://localhost:5000/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(mealeaten)
//   }).then(() => {
//       navigate('/nutrtion');
//   })
// }

// const handleChange = (e) => {
//     const meal = { food_eaten, calories, meal_course, user_id }
//     fetch(`http://localhost:5000/api/nutrition/user_id`
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(meal)
//   }).then(() => {
// }   navigate('/nutrition/${user_id}')
//



  return (
        <div>
      <form>
       <input 
       type="radio" 
       className="mealcourse" 
       value='Breakfast'
       checked={mealeaten === 'Breakfast'}
       onClick={handleChange}
       >
       </input>
       <label>Breakfast</label><br></br>
       <input 
       type="radio" 
       className="mealcourse" 
       value='Lunch'
       checked={mealeaten === 'Lunch'}
       onClick={handleChange}
       >
       </input>
       <label>Lunch</label><br></br>
       <input 
       type="radio"
       className="mealcourse"
       value='Dinner'
       checked={mealeaten === 'Dinner'}
       onClick={handleChange}
       >
       </input>
       <label>Dinner</label><br></br>
       <input 
       type="radio"
       className="mealcourse" 
       value='Snack'
       checked={mealeaten === 'Snack'}
       onClick={handleChange}
       >
       </input>
       <label>Snack</label><br></br>
       </form>
       <button type="submit">Save Meal</button>
   
        </div>
       
      );
    }
    