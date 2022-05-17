import React from 'react';
import background from "./userviewbackground.jpg";
import Card from 'react-bootstrap/Card';


function RecipeList(props) {

  const { recipes } = props;


  return (
    <div className="Recipelist"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
      {!recipes ? (<h2 className='checking'>
        {" "}
        Ready to eat? Search for a recipie.{" "} </h2>) : (
          <><Card className="recipe_list" >
            <Card.Body>
              <Card.Title>{recipes.meals[0].title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Preperation time: {recipes.meals[0].readyInMinutes} mins</Card.Subtitle>
              <Card.Text>Number of servings: {recipes.meals[0].servings}
              </Card.Text>
              <Card.Link href="{recipes.meals[0].sourceUrl}">Go to recipe!</Card.Link>
            </Card.Body>
          </Card><Card className="recipe_list" >
              <Card.Body>
                <Card.Title>{recipes.meals[1].title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Preperation time: {recipes.meals[1].readyInMinutes} mins</Card.Subtitle>
                <Card.Text>Number of servings: {recipes.meals[1].servings}
                </Card.Text>
                <Card.Link href="{recipes.meals[1].sourceUrl}">Go to recipe!</Card.Link>
              </Card.Body>
            </Card>
            <Card className="recipe_list" >
            <Card.Body>
              <Card.Title>{recipes.meals[2].title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Preperation time: {recipes.meals[2].readyInMinutes} mins</Card.Subtitle>
              <Card.Text>Number of servings: {recipes.meals[2].servings}
              </Card.Text>
              <Card.Link href="{recipes.meals[0].sourceUrl}">Go to recipe!</Card.Link>
            </Card.Body>
          </Card></>     
      )}
    </div>

  )
};

export default RecipeList;
