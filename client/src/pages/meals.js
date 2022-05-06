import React from 'react';
import { useState } from 'react';

export default function MealTime(props) {

  // const {nutrition} = props;
  
  const [mealcourse, SetMeal] = useState('');

  const handleChange = (e) => {
    SetMeal(e.target.value)
  }

  // const resetRadioState = () => {
  //   SetMeal('');
  // }

  // const [breakfast, setBreakfast] = useState('');
  // const [lunch, setLunch] = useState('');
  // const [dinner, setDinner] = useState('');
  // const [snack, setSnack] = useState('');

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
       {/* <button
          type="reset"
          onClick={resetRadioState}
        /> */}
       </form>
       <button type="submit">Save Meal</button>
        </div>
      );
    }
    