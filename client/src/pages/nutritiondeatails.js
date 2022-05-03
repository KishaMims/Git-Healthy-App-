import React from 'react'

export default function Nutrition (props) {


const {nutrition} = props;


  return (
    <div className='nutrtion_info'>
    {!nutrition ? (<h2 className='checking'>
     {" "}Have you eaten today?{" "}</h2>) : (
      <p>
        <span>{nutrition}</span>
        <span>{JSON.stringify(nutrition)}</span>
         <span>Food:{nutrition.name}</span>
         <span>Sugars:{nutrition.sugar_g}</span>
         <span>Calories:{nutrition.calories}</span>
         <span>Protien:{nutrition.protien_g}</span>
      </p>   
     )}
    </div>
  )
}
