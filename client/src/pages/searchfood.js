import React from "react";

function SearchFood(props) {

        
  return (
    <form className="search-food-form" onSubmit={props.getFoodNutrition}>
            <input type="text" name="food" placeholder="Enter your meal"/>
            <br/>
            <button> Search </button>

        </form>

    )
};

export default SearchFood;