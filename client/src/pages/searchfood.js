import React from "react";
import background from "./userviewbackground.jpg";

function SearchFood(props) {

        
  return (
    <div className="FoodSearch"
    style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: "1000px"
    }}
    >
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