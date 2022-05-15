import React from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { useState } from "react";

function WeeklyMeals( ) {
const [selectedDayRange, setSelectedDayRange] = useState({from: null, to: null });



// const handleSubmit = (e) => {
//   e.preventDefault()
//   const daterange = {selectedDayRange};
//   fetch(http://localhost:3000/api/userview/weekly'),{
//   method: 'GET',

//   }
// }
// console.log(setSelectedDayRange); 
return (
  <div>
   <Calendar
          value={selectedDayRange}
          onChange={setSelectedDayRange}
          shouldHighlightWeekends
        />
        <button>View Week</button>
      ); 
      </div>
)
    };



export default WeeklyMeals;