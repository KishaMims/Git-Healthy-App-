import React from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

function WeeklyMeals( ) {
const [selectedDayRange, setSelectedDayRange] = useState({from: null, to: null });


// console.log(setSelectedDayRange); 
return (
        <Calendar
          value={selectedDayRange}
          onChange={setSelectedDayRange}
          shouldHighlightWeekends
        />
      );
    };



export default WeeklyMeals;