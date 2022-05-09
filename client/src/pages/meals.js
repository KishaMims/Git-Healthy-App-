import React from 'react';
import { useState } from 'react';


export default function MealTime () {
 


// const [food, setFood] = useState('');
// const [calories, setCalories] = useState = ('');
 //const { id } = useParams();
const [mealcourse, SetMeal] = useState('');
// const { data: meals, error } = useFetch(`http://localhost:5000/api/nutrition/${user_id}`);

const handleChange = (e) => {
  SetMeal(e.target.value)
}


// const handleChange = (e) => {
//     const meal = { food_eaten, calories, meal_course, userid }
//     fetch(`http://localhost:5000/api/nutrition/`
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
       checked={mealcourse === 'Breakfast'}
       onClick={handleChange}
       >
       </input>
       <label>Breakfast</label><br></br>
       <input 
       type="radio" 
       className="mealcourse" 
       value='Lunch'
       checked={mealcourse === 'Lunch'}
       onClick={handleChange}
       >
       </input>
       <label>Lunch</label><br></br>
       <input 
       type="radio"
       className="mealcourse"
       value='Dinner'
       checked={mealcourse === 'Dinner'}
       onClick={handleChange}
       >
       </input>
       <label>Dinner</label><br></br>
       <input 
       type="radio"
       className="mealcourse" 
       value='Snack'
       checked={mealcourse === 'Snack'}
       onClick={handleChange}
       >
       </input>
       <label>Snack</label><br></br>
       </form>
       <button type="submit">Save Meal</button>
   
        </div>
       
      );
    }
    