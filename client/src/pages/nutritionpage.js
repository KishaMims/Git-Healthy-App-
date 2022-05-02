import React from "react";
import myHeaders from "./headertest";
import SearchFood from "./searchfood";

function Nutrition() {
  
  
// var myHeaders = new Headers();
//   myHeaders.append("X-Api-Key", "qLTEP0kL+FQedNFT7fvs7A==5NU1hXtrsqifhB7C");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://api.calorieninjas.com/v1/nutrition?query=6oz steak", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  return ( 

    <div className="HomeTitle">
        <h1 className="HomeTitle">Git healthy nutrition page</h1>
        <SearchFood/>
    </div>
  )
}

export default Nutrition;