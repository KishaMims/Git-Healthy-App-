import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function MealTime (props) {

  const {calories, food } = props;
  const [mealCourse, setMealCourse] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/userview/all')
      .then((response) => response.json())
      .then(data => {
        setData(data);
      })
  }, []);

  const handleMealCourseChange = (e) => {
    setMealCourse(e.target.value)
  };

  const createMeal = (e) => {
    const dailymeal = { foodeaten:food, calories:calories, mealcourse:mealCourse};
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
      <form>
        <input 
          type="radio" 
          className="mealcourse" 
          value='Breakfast'
          checked={'Breakfast' === mealCourse}
          onClick={handleMealCourseChange}
        >
        </input>
        <label>Breakfast</label><br></br>
        <input 
          type="radio" 
          className="mealcourse" 
          value='Lunch'
          checked={'Lunch' === mealCourse}
          onClick={handleMealCourseChange}
        >
        </input>
        <label>Lunch</label><br></br>
        <input 
          type="radio"
          className="mealcourse"
          value='Dinner'
          checked={'Dinner' === mealCourse}
          onClick={handleMealCourseChange}
        >
        </input>
        <label>Dinner</label><br></br>
        <input 
          type="radio"
          className="mealcourse" 
          value='Snacks'
          checked={'Snacks' === mealCourse}
          onClick={handleMealCourseChange}
        >
        </input>
        <label>Snack</label><br></br>
      </form>
      <button onClick={createMeal}>Save Meal</button>
    </div>
  );
}
