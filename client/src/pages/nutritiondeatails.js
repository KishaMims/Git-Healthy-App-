import React from "react";
import { useState, useEffect } from 'react';
import MealTime from './meals';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import _ from 'lodash';


function Nutrition (props) {
  const { nutrition } = props;
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');

useEffect(()=> {
  if(nutrition) {
    setFood(nutrition.items[0].name);
    setCalories(nutrition.items[0].calories);
  }
},[nutrition])

  return (
    <div className='nutrtion_info'>
    {!nutrition ? (<h2 className='checking'>
     {" "}When did you eat?{" "}</h2>) : (
       <div className="food_card_details">
      <Card className="food_details">
      <Card.Header>{_.upperFirst(nutrition.items[0].name)}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Total Grams of Fat: {nutrition.items[0].fat_total_g} g</ListGroup.Item>
        <ListGroup.Item>Total Sugar: {nutrition.items[0].sugar_g} g</ListGroup.Item>
        <ListGroup.Item>Total Calories: {nutrition.items[0].calories} g</ListGroup.Item>
        <ListGroup.Item>Total Grams of Protein: {nutrition.items[0].protein_g} g</ListGroup.Item>
        <ListGroup.Item>Total Carbohydrates: {nutrition.items[0].carbohydrates_total_g} g</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
     )}
     
     <MealTime food={food} calories={calories}/> 
    </div>
  )
}

export default Nutrition;
