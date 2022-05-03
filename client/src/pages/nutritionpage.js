import React from "react";
import SearchFood from "./searchfood";
import { useState } from "react";
import Nutrition from "./nutritiondeatails";
//import axios from 'axios';

const FindFood = () => {
const [nutrtion, setNutrition] = useState([]);


//headers: myHeaders, 
// var myHeaders = new Headers();


  const getFoodNutrition = (e) => {
    e.preventDefault();
    let food = e.target.elements.food.value;
    console.log(food);
    fetch(`/api/nutrition?query=${food}`,{
      })
        .then((response) =>  response.json())
        .then((data) => {
            setNutrition(data);
            console.log(data);
        })
        .catch((err) => console.error(`Error: ${err}`));
    }
  
  // useEffect(()=> {
  // function getFoodNutrition() {
  //   fetch(`/nutrition?query=${food}`, {
  //     method: "POST",
  //     headers: { 'X-Api-Key': process.env.CALORIENINJAAPIKEY, contentType: 'application/json'},
  //     body: JSON.stringify({ test: food }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => setNutrition(result))
  //     .catch((err) => console.log(`Error: ${err}`));
  


  return ( 

    <div className="HomeTitle">
        <h1 className="HomeTitle">Git healthy Nutrition Page</h1>
        <SearchFood getFoodNutrition={getFoodNutrition}/>
        <Nutrition nutrtion={nutrtion}/>
    <div>
    {JSON.stringify(nutrtion)}
    </div>
    </div>
  )
}

export default FindFood;