//import { query } from "express";
import React from "react";
// import { useState, useEffect } from "react";
// import myHeaders from "./headertest";


function SearchFood() {
//     const [nutrition, setNutrition] = useState([]);
//     const [query, setQuery] = useState("");


//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//       };

//       useEffect(() => {
//       fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, requestOptions)
//         .then((response) => response.json())
//         .then(nutrition => {
//             setNutrition(nutrition);
//             console.log('Nutrition fetched...', nutrition);
//     });
// }, [query]);
        
        
  return (
    <div>
        <p>TEXT HERE</p>
       {/* <form>
       <fieldset>
                <label>Enter Your Meal Below</label>
                   <input
                      type="text"
                      className="add-your-meal-item"
                      placeholder="10z Steak or 2 apples"
                      required
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                   />
                    <button type="submit" className="SearchButton" onClick={onsubmit}>Save Meal</button>
       </fieldset>
         </form> */}
         {/* {JSON.stringify(nutrition)} */}
    </div>
  )
}

export default SearchFood;