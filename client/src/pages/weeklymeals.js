import React from 'react';
import { useState, useEffect } from "react";
import moment from "moment";
import _ from 'lodash';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';


function WeeklyMeals() {


  const [weeklymeals, setWeeklyMeals] = useState([]);

  useEffect(() => {
    fetch('/api/userview/weekly')
      .then((response) => response.json())
      .then(weeklymeals => {
        setWeeklyMeals(weeklymeals);
        console.log(weeklymeals);
      }

      )

  }, []);

  let weeklyMeals = {};


  weeklymeals.forEach((entry) => {
    weeklyMeals[entry.addedon] = weeklyMeals[entry.addedon] || {};
    weeklyMeals[entry.addedon][entry.mealcourse] = weeklyMeals[entry.addedon][entry.mealcourse] || [];
    weeklyMeals[entry.addedon][entry.mealcourse].push([entry.foodeaten, entry.calories]);

  });




  return (
    <div className='weekly_view'>
      <h1 className='weekly_view_header'>Prior Week's Meals</h1>
      <Container className='weely_view_box'>
      {
        Object.entries(weeklyMeals).map((day) => {
          let date = moment(day[0]).format("MMM Do, YYYY");
          let foodItems = [];
          Object.entries(day[1]).forEach((course, index) => {
            let element = (<li key={index}>Course: {course[0]} Food: {_.upperFirst(course[1][0][0])} Calories: {course[1][0][1]}</li>)
            foodItems.push(element);
          });
          return (
            <Row xs={1} md={2} className="g-4">
                    <Col>
                  <Card border="success" style={{display: 'flex', flexDirection: 'row'}}>
                      <Card.Header>{date}</Card.Header>
                      <ListGroup variant="flush">
                      <ListGroup.Item>{foodItems}</ListGroup.Item>
                     </ListGroup>
                  </Card><br/>
                </Col>
            </Row>

          );
        })
      }
      </Container>
    </div>
    
  )
};



export default WeeklyMeals;