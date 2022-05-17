import React from "react";


function SearchFood(props) {

        
  return (
    <div className="FoodSearch">
     <div>
    <form className="search-food-form" onSubmit={props.getFoodNutrition}>
            <input type="text" name="food" placeholder="Enter your meal"/>
            <br/>
            <button> Search </button>

        </form>
        </div>
        </div>

    )
};

export default SearchFood;