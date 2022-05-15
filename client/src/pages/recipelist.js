import React from 'react'
 function RecipeList(props) {

  const { recipes } = props;
 

  return (
    <div>
        {!recipes ? (<h2 className='checking'>
     {" "}Ready to eat? Search for a recipie.{" "}</h2>) : (
            <p>
             <section className="meals">
             <h1>Recipes</h1>
      
              {JSON.stringify(recipes)}
            </section>
            <section className="meals">
        {/* {recipes.map(recipe => {
          return <Meal key={recipe.id} {recipe.} />
        })} */}
         <span>Food:{recipes.week}</span>
      </section>
            </p>
        )}
          </div>
  )
};

export default RecipeList;
