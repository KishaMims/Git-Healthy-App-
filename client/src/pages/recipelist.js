import React from 'react'
 function RecipeList(props) {

  const {recipelist} = props;
//   const nutrients = recipelist.nutrients;

  return (
    <div>
        {!recipelist ? (<h3 className="Hungry">
          {" "}
          Hungry? Find some healthy meals to make.{" "}
        </h3>) : (
            <p>
            
      
            <section className="meals">
              {/* {recipelist.map(meal => {
                return <Meal key={meal.id} meal={meal} />
              })} */}
              {JSON.stringify(recipelist)}
            </section>
            </p>
        )}
          </div>
  )
};

export default RecipeList;
