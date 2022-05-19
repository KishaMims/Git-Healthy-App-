import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import moment from "moment";
import _ from 'lodash';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image from './bootstrapcardpic.jpg';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';




const UserView = () => {
  const [usermeals, setUserMeals] = useState([]);
  // const [users, setUser] = useState(undefined);
  const current = new Date();
  const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
  const navigate = useNavigate();

//function to reload on delete
  const getMeals = () =>{
  fetch('/api/userview')
  .then((response) => response.json())
  .then(usermeals => {
    setUserMeals(usermeals);
  });
};


  //get request needed to get the user id and current day meals 
  useEffect(() => {
    fetch('/api/userview')
      .then((response) => response.json())
      .then(usermeals => {
        setUserMeals(usermeals);
        console.log(usermeals);
      }

      )

  }, []);


  const MySwal = withReactContent(Swal);

  const deleteMeal = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed){
      fetch(`/api/userview/${id}`, {
      method: 'DELETE'
    }).then(() => {
      getMeals();
    })
  }
})
};



//delete request 
  // const deleteMeal = (id) => {
  //   fetch(`http://localhost:3000/api/userview/${id}`, {
  //     method: 'DELETE'
  //   }).then((response) => {
  //         if (response.ok) {
  //           getMeals();
  //         }
  //       },
  //         (error) => {
  //           alert(error);
  //         }
  //       )
  //     };


 // link to add meal      
  const navigateToAddMeal = () => {
    navigate(`/api/nutrition`)
  }


  const navigateToWeeklyMeal = () => {
    navigate(`/api/userview/weekly`)
  }


  const meals = {
    Breakfast: [],
    Lunch: [],
    Dinner: [],
    Snacks: [],
  };

  let totalCalories = 0;

  usermeals.forEach((meal) => {
    meals[meal.mealcourse].push(meal);
    totalCalories += Math.round(Number(meal.calories));
  });

  //delete function 


  return (
    <div className="user_view_page">
         <h1 className="user_view_header">Your Daily Nutrition Summary</h1>
          <h1 className="user_view_header">{moment(date).format("MMM Do, YYYY")}</h1>
          {meals.Calories &&
        <>
        </>
      }
      <h2 className="user_calories_box">Current calories today: </h2>
      <h2 className="user_calories_box">{totalCalories}<br /></h2>
      <h2 className="user_calories_box"> Have you eaten today?</h2>
      <div>
      <Button className="user_calories_box" variant="outline-success" onClick={navigateToAddMeal}>Add Meal</Button><br />
      <br/><Button className="user_calories_box" variant="outline-success" onClick={navigateToWeeklyMeal}>View Week</Button>
      </div>
          <Container>
            <Row>
              <Col md={3}>
       {meals.Breakfast &&
    
        <Card  border="success" className="user_view">
          <Card.Img variant="top" src={image} style={{ maxWidth: "286px", maxHeight: "180px" }} />
        <>
          <Card.Title>Breakfast</Card.Title>
          <ul>
          
            {
              meals.Breakfast.map((food) => {
                return (<li id={food.id}> {_.upperFirst(food.foodeaten)} Cal {food.calories}<Button variant="outline-success" className="delete" onClick={() => deleteMeal(food.id)}>Delete Meal </Button></li>);
              })
            }
          </ul>
        </>
        </Card>
      }<br/>
      </Col>
          
              <Col md={3}>
      {meals.Lunch &&
        <Card  border="success" className="user_view" >
        <Card.Img variant="top" src={image} style={{ maxWidth: "286px", maxHeight: "180px" }} />
        <>
          <Card.Title>Lunch</Card.Title>
          <ul>
            {
              meals.Lunch.map((food,index) => {
                return (<li key={index} id={food.id}>{_.upperFirst(food.foodeaten)} Cal {food.calories}<Button variant="outline-success" className="delete" onClick={() => deleteMeal(food.id)}>Delete Meal </Button></li>);
              })
            }
          </ul>
        </>
        </Card>
    
      }
       </Col>
    <Col md={3}>
      {meals.Dinner &&
      <Card  border="success" className="user_view">
      <Card.Img variant="top" src={image} style={{ maxWidth: "286px", maxHeight: "180px" }} /> 
        <>
         <Card.Title>Dinner</Card.Title>
          <ul>
            {
              meals.Dinner.map((food,index) => {
                return (<li key={index} id={food.id}>{_.upperFirst(food.foodeaten)} Cal {food.calories}<Button variant="outline-success" className="delete" onClick={() => deleteMeal(food.id)}>Delete Meal </Button></li>);
              })
            }
          </ul>
        </>
        </Card>
      }
    </Col>
    <Col md={3}>
      {meals.Snacks &&
       <Card  border="success" className="user_view">
       <Card.Img variant="top" src={image} style={{ maxWidth: "286px", maxHeight: "180px" }} /> 
        <>
          <Card.Title>Snacks</Card.Title>
          <ul>
            {
              meals.Snacks.map((food, index) => {
                return (<li key={index}id={food.id}>{_.upperFirst(food.foodeaten)} Cal {food.calories}<Button variant="outline-success" className="delete" onClick={() => deleteMeal(food.id)}>Delete Meal </Button></li>);
              })
            }
          </ul>
        </>
        </Card>
      }
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default UserView;
