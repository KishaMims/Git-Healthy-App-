import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function RecipeList(props) {

  const { recipes } = props;


  return (
    <div className="Recipelist">
      {!recipes ? (<h2 className='checking'>
        {" "}
        Ready to eat? Search for a recipie based on your calorie needs.{" "} </h2>) : (
          <>
          <CardGroup>
          <Card border="success" bg="success" className="recipe_list" >
            <Card.Body>
              <Card.Title>{recipes.meals[0].title}</Card.Title>
              <Card.Subtitle >Preperation time: {recipes.meals[0].readyInMinutes} mins</Card.Subtitle>
              <Card.Text>Number of servings: {recipes.meals[0].servings}
              </Card.Text>
              <a className="link-light" href={recipes.meals[0].sourceUrl}>Go to Recipe!</a>
            </Card.Body>
          </Card>
          <Card border="success" bg="success" className="recipe_list" >
              <Card.Body>
                <Card.Title>{recipes.meals[1].title}</Card.Title>
                <Card.Subtitle >Preperation time: {recipes.meals[1].readyInMinutes} mins</Card.Subtitle>
                <Card.Text>Number of servings: {recipes.meals[1].servings}
                </Card.Text>
                <a className="link-light" href={recipes.meals[1].sourceUrl}>Go to Recipe!</a>
              </Card.Body>
            </Card>
            <Card border="success"  bg="success" className="recipe_list" >
            <Card.Body>
              <Card.Title>{recipes.meals[2].title}</Card.Title>
              <Card.Subtitle >Preperation time: {recipes.meals[2].readyInMinutes} mins</Card.Subtitle>
              <Card.Text>Number of servings: {recipes.meals[2].servings}
              </Card.Text>
              <a className="link-light" href={recipes.meals[2].sourceUrl} >Go to Recipe!</a>
            </Card.Body>
          </Card>
          </CardGroup>
          </>     
      )}
    </div>

  )
};

export default RecipeList;
