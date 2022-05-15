import React from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { useState } from "react";

function WeeklyMeals( ) {
const [selectedDayRange, setSelectedDayRange] = useState({from: null, to: null });






const getWeek = (selectedDayRange) => {
  fetch(`http://localhost:3000/api/userview/weekly/${selectedDayRange}`, {
    method: 'GET'
  }).then((response) => {
        if (response.ok) {
        }
      },
        (error) => {
          alert(error);
        }
      )
    };


console.log(setSelectedDayRange); 
return (
  <div>
   <Calendar
          value={selectedDayRange}
          onChange={setSelectedDayRange}
          shouldHighlightWeekends
        />
        <button className="weekview" onClick={() => getWeek(selectedDayRange)}>View Week</button>
      ); 
      </div>
)
    };



export default WeeklyMeals;