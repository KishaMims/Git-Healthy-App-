//import { query } from "express";
import React from "react";
// import { useState, useEffect } from "react";
// import myHeaders from "./headertest";



function SearchFood(props) {
//     const [nutrition, setNutrition] = useState([]);
//     const [food, setFood] = useState("");



//   var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     };
//     console.log(requestOptions);

//       useEffect(() => {
//       fetch(`https://api.calorieninjas.com/v1/nutrition?query=${food}`, requestOptions)
      
//         .then((response) => response.text())
//         .then(nutrition => {
//             setNutrition(nutrition);
//             console.log('Nutrition fetched...', nutrition);
//     });
// }, [food]);
        
/* <div className="Weather">
<h1>Food Eaten</h1>  
<form onSubmit={onsubmit}>
    <input placeholder="Food Eaten" value={food} onChange= {(event) => setFood(event.target.value)} type="food"/>
    <button type="submit" className="SearchButton" onClick={onsubmit}>Search</button>
</form>
<div>
    {JSON.stringify(nutrition)}
</div>
</div> */
        
  return (
    <form className="search-food-form" onSubmit={props.getFoodNutrition}>
            <input type="text" name="food" placeholder="Enter your meal"/>
            <button> Check food nutrtion </button>

        </form>

    )
};

export default SearchFood;